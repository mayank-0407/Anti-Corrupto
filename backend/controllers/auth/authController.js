const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const validRoles = ["ADMIN", "USER", "POLICE", "REGISTRAR"];

const signUpController = async (req, res) => {

	try {
		const { name, email, password, role } = req.body;
		if (!email || !password || !name || !validRoles.includes(role)) {
			return res.status(400).json({ message: "Please provide all required fields with a valid role" });
		}
		
		const existingUser = await prisma.user.findUnique({
			where: { email },
		});
		
		if (existingUser) {
			return res.status(400).json({ message: "User already exists" });
		}
		
		const hashedPassword = await bcrypt.hash(password, 10);
		
		const user = await prisma.user.create({
			data: { name, email, hashedPassword, role },
		});
		
		return res.status(200).json({ message: "User registered successfully", user });
	} catch (err) {
		console.log("hi1");
		return res.status(500).json({ message: "Internal server error", details: err.message });
	}
};


const loginController = async (req, res) => {
	try {
		
		const { email, password } = req.body;

		const existingUser = await prisma.User.findUnique({
			where: {
				email,
			},
		});

		if (!existingUser) {
			return res.status(203).json({ message: "User not found" });
		}
		
		
		const matched = await bcrypt.compare(password, existingUser.hashedPassword);
		
		if (!matched) {
			return res.status(203).json({ message: "Incorrect password" });
		}
		console.log("hi");
		const accessToken = generateAccessToken({
			id: existingUser.id,
		});

		const refreshToken = generateRefreshToken({
			id: existingUser.id,
		});
		

		await prisma.User.update({
			where: {
				id: existingUser.id,
			},
			data: {
				access_token: accessToken,
				refresh_token: refreshToken,
			},
		});
		

		const session = await prisma.Session.create({
			data: {
				sessionToken: generateSessionToken(),
				userId: existingUser.id,
				expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
			},
		});

		return res
			.status(200)
			.json({ message: "Login successful", accessToken, session });
	} catch (err) {
		return res
			.status(203)
			.json({ message: "Internal server error", details: err.message });
	}
};

const refreshAccessTokenController = async (req, res) => {
	const { userId, refreshToken } = req.body;

	if (!refreshToken) {
		return res.status(400).json({ error: "Refresh token is required" });
	}

	try {
		const decoded = jwt.verify(
			refreshToken,
			process.env.REFRESH_TOKEN_PRIVATE_KEY
		);
		const id = decoded.id;

		const user = await prisma.User.findUnique({
			where: {
				id,
			},
		});

		if (!user) {
			return res.status(401).json({ error: "Invalid refresh token" });
		}

		const newAccessToken = generateAccessToken({ id });

		return res.status(201).json({
			message: "Token refreshed successfully",
			accessToken: newAccessToken,
		});
	} catch (err) {
		return res
			.status(401)
			.json({ error: "Invalid refresh token", details: err.message });
	}
};

const generateAccessToken = (data) => {
	try {
		const token = jwt.sign(data, process.env.ACCESS_TOKEN_PRIVATE_KEY, {
			expiresIn: "1d",
		});
		return token;
	} catch (e) {
		return res
			.status(500)
			.json({ error: "Failed to generate access token", details: e.message });
	}
};

const generateRefreshToken = (data) => {
	try {
		const token = jwt.sign(data, process.env.REFRESH_TOKEN_PRIVATE_KEY, {
			expiresIn: "20d",
		});
		return token;
	} catch (e) {
		return res
			.status(500)
			.json({ error: "Failed to generate refresh token", details: e.message });
	}
};

const logOutController = async (req, res) => {

	const sessionId = req.headers['authorization'];
	try {
		if (! sessionId) {
			return res.status(400).json({ error: "session not available" });
		}

		// await prisma.User.update({
		// 	where: {
		// 		id: req.params.id
		// 	},
		// 	data: {
		// 		access_token: null,
		// 		refresh_token: null,
		// 	},
		// });
		
		await prisma.Session.deleteMany({
			where: {
				sessionToken:  sessionId,
			},
		});
		return res.status(200).json({ message: "Logged out successfully" });
	} catch (e) {
		return res
			.status(500)
			.json({ error: "Internal server error", details: e.message });
	}
};

const generateVerificationToken = () => {
	return Math.random().toString(36).substr(2, 10);
};

const generateSessionToken = () => {
	return Math.random().toString(36).substr(2, 10);
};

const checkValidSession = async (req, res) => {
	const sessionId  = req.params.id;
	try {
		const thisSession = await prisma.Session.findUnique({
			where: { sessionToken:  sessionId },
		});
		if (thisSession) return res.status(200).json({success:"Is Logged In"});
		return res.status(401).json({error:"Not Logged In"});
	} catch (e) {
		return res.status(500).json({ error: "Session Expired", details: e.message });
	}
};

const getUserDetails = async (req, res) => {
	const sessionId  = req.params.id;
	try {
		const thisSession = await prisma.Session.findUnique({
			where: { sessionToken:  sessionId },
		});
		const thisUser = await prisma.User.findUnique({
			where : {
				id:thisSession.userId
			}
		});
		if(thisUser)
			return res.status(200).send(thisUser);
		else
			return res.status(500).json({ error: "No user found", details: e.message });
	} catch (e) {
		return res.status(500).json({ error: "Session Expired", details: e.message });
	}
};

const getUserEmailDetails = async (req, res) => {
	const clientId  = req.params.id;
	try {
		const thisUser = await prisma.User.findUnique({
			where : {
				id:clientId
			}
		});
		if(thisUser)
			return res.status(200).send(thisUser);
		else
			return res.status(500).json({ error: "No user found", details: e.message });
	} catch (e) {
		return res.status(500).json({ error: "No Email Found", details: e.message });
	}
};

module.exports = {
	signUpController,
	loginController,
	logOutController,
	refreshAccessTokenController,
	checkValidSession,
	getUserDetails,
	getUserEmailDetails,
};
