import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

const createTransferLand = async (transferLandData) => {
  try {
    const response = await axios.post(`${BASE_URL}/transferland/create`, transferLandData);
    return response;
  } catch (error) {
    throw new Error(error.response.data.error || 'Something went wrong');
  }
};

const getAllTransferLands = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/transferland/all`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Something went wrong');
  }
};

const getTransferLandById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/transferland/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Something went wrong');
  }
};

const getTransferLandsByUser = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/transferland/user/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Something went wrong');
  }
};

export { createTransferLand, getAllTransferLands, getTransferLandById, getTransferLandsByUser };
