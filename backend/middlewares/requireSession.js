const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const requireSession = async (req, res, next) => {
  console.log(req.headers);
  let sessionId = req.headers['authorization'];
  console.log()
  // sessionId = "vwkmcju2s1";  /////////////////////////////////////////////// hatado
  if (!sessionId) {
    return res.status(401).json({ message: "Unauthorized: No session provided" });
  }

  try {
    const session = await prisma.session.findUnique({
      where: { sessionToken: sessionId },
      include: { user: true },
    });

    if (!session || session.expires < new Date()) {
      return res.status(401).json({ message: "Session expired or invalid" });
    }
    console.log("logout hora hai")
    req.user = session.user; // Attach the user object to the request
    next();
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

module.exports = requireSession;
