import axios from 'axios';
import { getCookie } from '../cookieSetup';
import { backendURL } from '../config';

const BASE_URL = `${backendURL}case`;

const sessionToken = getCookie('token');
const header = {
  headers: {
    Authorization: sessionToken,
  },
};

const createLandCase = async (landCaseData) => {
  try {
    const response = await axios.post(`${BASE_URL}/create`, landCaseData, header);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Something went wrong');
  }
};

const getAllLandCases = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/all`, header);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Something went wrong');
  }
};

const getLandCaseById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`, header);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Something went wrong');
  }
};

const getLandCasesByUser = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/${userId}`, header);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Something went wrong');
  }
};

export { createLandCase, getAllLandCases, getLandCaseById, getLandCasesByUser };
