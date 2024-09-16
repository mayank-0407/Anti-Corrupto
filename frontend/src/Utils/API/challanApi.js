import axios from 'axios';
import { getCookie } from '../cookieSetup';

const API_URL = 'http://localhost:3000/challan';

const sessionToken = getCookie('token');
const header = {
  headers: {
    Authorization: sessionToken,
  },
};

export const addChallan = async (challan) => {
  try {
    console.log('in challanAPISAN : ', challan);
    const response = await axios.post(`${API_URL}/add`, challan, header);
    console.log('Print response : ', response);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getVehicleChallans = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/view`, header);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getChallansById = async (challanId) => {
  try {
    console.log('in get challan');
    const response = await axios.get(`${API_URL}/view/${challanId}`, header);
    return response.data;
  } catch (error) {
    throw error;
  }
};
