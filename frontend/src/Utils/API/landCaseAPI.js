import axios from 'axios';
import { getCookie } from '../cookieSetup';
import { backendURL } from '../config';

const API_URL = `${backendURL}/case`;

const sessionToken = getCookie('token');
const header = {
  headers: {
    Authorization: sessionToken,
  },
};


// Get all land cases
export const getAllLandCases = async () => {
  try {
    const response = await axios.get(`${API_URL}/all`, header);
    return response.data;
  } catch (error) {
    throw error;
  }
};


// Get land cases by user
export const getUserLandCases = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/user/${userId.data.id}`, header);
    return response.data;
  } catch (error) {
    throw error;
  }
};


// Get a single land case by ID
export const getOneLandCase = async (landCaseId) => {
  try {
    const response = await axios.get(`${API_URL}/${landCaseId.id}`, header);
    return response.data;
  } catch (error) {
    throw error;
  }
};


// Create a new land case
export const addLandCase = async (landCase) => {
  try {
    const response = await axios.post(`${API_URL}/create`, landCase, header);
    return response.data;
  } catch (error) {
    throw error;
  }
};


// Update an existing land case
export const updateLandCase = async (landCaseId, updatedLandCase) => {
  try {
    const response = await axios.put(`${API_URL}/update/${landCaseId}`, updatedLandCase, header);
    return response.data;
  } catch (error) {
    throw error;
  }
};


// Additional method for adding land case to DB if required (you can modify the endpoint)
export const addLandCaseToDB = async (landCaseId, blockchainId) => {
  try {
    blockchainId = Number(blockchainId).toString();
    const response = await axios.post(
      `${API_URL}/add/landcase/id/indb/${landCaseId}`,
      { blockchainId },
      header
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
