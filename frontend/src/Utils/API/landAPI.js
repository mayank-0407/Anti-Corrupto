import axios from 'axios';
import { getCookie } from '../cookieSetup';

const API_URL = 'http://localhost:3000/land';

const sessionToken = getCookie('token');
const header = {
  headers: {
    Authorization: sessionToken,
  },
};

export const getAllLands = async () => {
  try {
    const response = await axios.get(`${API_URL}/all`, header);
    // console.log('In api   :    ', response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserLands = async (userId) => {
  try {
    // console.log('In api : ', userId.data.id);
    const response = await axios.get(`${API_URL}/${userId.data.id}`, header);
    // console.log('In api   :    ', response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getOneLand = async (landId) => {
  if (true) {
    // console.log('api get one landddd : ', landId.id);
    const response = await axios.get(`${API_URL}/land/${landId.id}`, header);
    // console.log('trans in land api : ', response);
    return response;
  }
  // catch (error) {
  //   throw error;
  // }
};

export const addLand = async (land) => {
  try {
    const response = await axios.post(`${API_URL}/create`, land, header);
    // console.log(response);
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
  console.log('hi');
  console.log(landid, LandBlockchainId);
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
