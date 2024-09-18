import axios from 'axios';
import { getCookie } from '../cookieSetup';
import { backendURL } from '../config';

const BASE_URL = `${backendURL}`;

const sessionToken = getCookie('token');
const header = {
  headers: {
    Authorization: sessionToken, // Session token in headers
  },
};

const createTransferLand = async (transferLandData) => {
  try {
    const response = await axios.post(`${BASE_URL}/transferland/create`, transferLandData, header);
    return response;
  } catch (error) {
    throw new Error(error.response.data.error || 'Something went wrong');
  }
};

const getAllTransferLands = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/transferland/all`, header);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Something went wrong');
  }
};

const getTransferLandById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/transferland/${id}`, header);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Something went wrong');
  }
};

const getTransferLandsByUser = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/transferland/user/${userId}`, null, header);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Something went wrong');
  }
};

export { createTransferLand, getAllTransferLands, getTransferLandById, getTransferLandsByUser };
