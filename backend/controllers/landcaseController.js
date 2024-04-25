const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createLandCase = async (req, res) => {
  try {
    const { caseStatus, caseDescription, caseDate, transferLandId } = req.body;

    if (!caseStatus || !caseDescription || !caseDate || !transferLandId) {
      return res.status(400).json({ message: "Please provide all required fields" });
    }

    const newLandCase = await prisma.landCase.create({
      data: {
        caseStatus,
        caseDescription,
        caseDate,
        transferLandId,
      },
    });

    res.status(201).json({ success: true, data: newLandCase });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const getAllLandCases = async (req, res) => {
  try {
    const landCases = await prisma.landCase.findMany();
    res.status(200).json({ success: true, data: landCases });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const getLandCaseById = async (req, res) => {
  const id = req.params.id;
  try {
    const landCase = await prisma.landCase.findUnique({ where: { id } });
    if (!landCase) {
      return res.status(404).json({ success: false, error: "Land case not found" });
    }
    res.status(200).json({ success: true, data: landCase });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const getLandCasesByUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const landCases = await prisma.landCase.findMany({
      where: {
        transferLand: {
          currentOwnerId: userId,
        },
      },
    });
    res.status(200).json({ success: true, data: landCases });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { createLandCase, getAllLandCases, getLandCaseById, getLandCasesByUser };
