const authorizeRole = (requiredRole) => {
	return async (req, res, next) => {
		try {
			const sessionId = req.headers['authorization'];
			if (!sessionId) {
				return res.status(401).json({ message: "Unauthorized" });
			}

			const session = await prisma.session.findUnique({
				where: { sessionToken: sessionId },
				include: { user: true },
			});

			if (!session || session.expires < new Date()) {
				return res.status(401).json({ message: "Session expired or invalid" });
			}

			const user = session.user;
			if (user.role !== requiredRole) {
				return res.status(403).json({ message: "Access denied" });
			}

			req.user = user;
			next();
		} catch (err) {
			return res.status(500).json({ message: "Internal server error", details: err.message });
		}
	};
};
