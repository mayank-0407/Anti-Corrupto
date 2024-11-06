import axios from 'axios';
import { getCookie } from '../cookieSetup';
import { backendURL } from '../config';

const API_URL = `${backendURL}/land`;

const sessionToken = getCookie('token');
const header = {
  headers: {
    Authorization: sessionToken,
  },
};

export const getAllLands = async () => {
  try {
    const response = await axios.get(`${API_URL}/all`, header);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserLands = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/${userId.data.id}`, header);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getOneLand = async (landId) => {
  try {
    const response = await axios.get(`${API_URL}/land/${landId.id}`, header);
    return response;
  }
  catch (error) {
    throw error;
  }
};

export const addLand = async (land) => {
  try {
    const response = await axios.post(`${API_URL}/create`, land, header);
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateLand = async (userId, LandId, land) => {
  try {
    const response = await axios.post(`${API_URL}/${userId}/${LandId}`, land, header);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addLandIdToDB = async (landid, LandBlockchainId) => {
  LandBlockchainId = Number(LandBlockchainId).toString();
  try {
    const response = await axios.post(
      `${API_URL}/add/land/id/indb/${landid}`,
      { LandBlockchainId },
      header
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

// export const deleteVehicle = async (userId, vehicleId) => {
//     try {
//         const response = await axios.post(
//             `${API_URL}/${userId}/vehicles/${vehicleId}`
//         );
//         return response.data;
//     } catch (error) {
//         throw error;
//     }
// };
