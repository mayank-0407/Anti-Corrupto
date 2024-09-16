import axios from 'axios';
import { getCookie } from '../cookieSetup';

const API_URL = 'http://localhost:3000';
const sessionToken = getCookie('token');
console.log('Vehicle session token :', sessionToken);
const header = {
  headers: {
    Authorization: sessionToken, // Session token in headers
  },
};

export const getUserVehicles = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/vehicle/view/all/${userId}`, header);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getOneVehicles = async (vehicleId) => {
  try {
    const response = await axios.get(`${API_URL}/vehicle/view/${vehicleId}`, header);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addVehicle = async (vehicle) => {
  try {
    const response = await axios.post(`${API_URL}/vehicle/add`, vehicle, header);
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateVehicle = async (userId, vehicleId, vehicle) => {
  try {
    const response = await axios.post(
      `${API_URL}/${userId}/vehicles/${vehicleId}`,
      vehicle,
      header
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteVehicle = async (userId, vehicleId) => {
  try {
    const response = await axios.post(`${API_URL}/${userId}/vehicles/${vehicleId}`, null, header);
    return response.data;
  } catch (error) {
    throw error;
  }
};
