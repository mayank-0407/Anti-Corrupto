import axios from 'axios';
import cookie from 'js-cookie';
import { getCookie } from '../cookieSetup';
import { backendURL } from '../config';

const API_URL = `${backendURL}auth`;

const sessionToken = cookie.get('token');

const header = {
  headers: {
    Authorization: sessionToken, // Session token in headers
  },
};

export const signUpUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    if (response.status === 200) {
      let res = {
        status: 200,
        msg: response.data.message,
      };
      return res;
    } else {
      let res = {
        status: response.status,
        msg: response.data.message,
      };
      return res;
    }
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const logoutUser = async (sessionToken) => {
  try {
    const response = await axios.post(`${API_URL}/logout`, null, header);
    if (response.status == 200) return true;
    else return false;
  } catch (error) {
    console.log(error);
  }
};

export const isSessionValid = async (sessionId) => {
  try {
    const response = await axios.get(`${API_URL}/verifysession/${sessionId}`, header);
    if (response.status == 200) {
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserDetails = async (sessionId) => {
  try {
    const response = await axios.get(`${API_URL}/getuser/${sessionId}`, header);
    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserEmail = async (clientId) => {
  try {
    const response = await axios.get(`${API_URL}/getuseremail/${clientId}`, header);
    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};
