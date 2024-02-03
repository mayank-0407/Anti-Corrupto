const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const prisma = require("../db/prisma");

const signUpController = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!email || !password || !name) {
            return res
                .status(400)
                .json({ error: "One or more fields are empty" });
        }
        const alreadyUser = await prisma.User.findUnique({
            where: {
                email: email,
            },
        });
        if (alreadyUser) {
            return res.status(409).json({ error: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.User.create({
            data: { name, email, hash: hashedPassword },
        });
        return res.status(200).json({ user });
    } catch (err) {
        return res.status(500).json({ error: err });
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
            return res.status(404).json({ error: "User is not registered" });
        }
        const matched = await bcrypt.compare(password, existingUser.hash);
        if (!matched) {
            return res.status(403).json({ error: "Incorrect password" });
        }
        const accessToken = generateAccessToken({
            id: existingUser.id,
          });
      
          const refreshToken = generateRefreshToken({
              id: existingUser.id,
          });

          res.cookie('jwt', refreshToken, {
            httpOnly: true,
            secure: true
          })
          return res.status(200).send({accessToken});

    } catch (err) {
        return res.status(500).json({ error: err });
    }
};

const refreshAccessTokenController = async (req, res) => {
    const cookies = req.cookies;
    
    const refreshToken = cookies.jwt;
    if(!refreshToken){
      return res.json({"error":"Refresh token in cookie is required"});
    }

    try {
        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_PRIVATE_KEY);
        const id = decoded.id;
        const accessToken = generateAccessToken({id});
        return res.status(201).json({accessToken});

    } catch (err) {
        return res.status(401).json({ error: err });
    }
}

const generateAccessToken = (data) => {
    try {
        const token = jwt.sign(data, process.env.ACCESS_TOKEN_PRIVATE_KEY, {
            expiresIn: "1d",
        });
        return token;
    } catch (e) {
        return res.status(500).json({ error: e });
    }
};

const generateRefreshToken = (data) => {
    try {
        const token = jwt.sign(data, process.env.REFRESH_TOKEN_PRIVATE_KEY, {
            expiresIn: "20d",
        });
        return token;
    } catch (e) {
        return res.status(500).json({ error: e });
    }
};


const logOutController = async (req, res) => {
    try {
        res.clearCookie("jwt", {
            httpOnly: true,
            secure: true,
        });
        res.status(200).json({"msg":"Logged out successfully"});
    } catch (e) {
        return res.status(500).json({ error: e });
    }
};

module.exports = {
    signUpController,
    loginController,
    logOutController,
    refreshAccessTokenController
};
