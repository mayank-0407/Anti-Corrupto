import axios from 'axios';
import { getCookie } from '../cookieSetup';

const API_URL = 'http://localhost:3000/inquiry';

const sessionToken = getCookie('token');

const header = { headers: { Authorization: `Bearer ${sessionToken}` } };

export const getAllInquiries = async () => {
  try {
    const response = await axios.get(API_URL, header);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getInquiryById = async (inquiryId) => {
  try {
    const response = await axios.get(`${API_URL}/${inquiryId}`, header);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getInquiryLandsById = async (landId) => {
  try {
    const response = await axios.get(`${API_URL}/land/${landId}`, header);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createInquiry = async (inquiry) => {
  try {
    console.log(inquiry);
    const response = await axios.post(`${API_URL}`, inquiry, header);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserInterestedLands = async (clientId) => {
  try {
    console.log('In api : ', clientId);
    const response = await axios.get(`${API_URL}/${clientId}`, header);
    console.log('In api   :    ', response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateInquiryStatus = async (inquiryId, status) => {
  try {
    console.log(inquiryId, status);
    const response = await axios.post(`${API_URL}/change/status/${inquiryId}`, { status }, null, header);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteInquiry = async (inquiryId) => {
  try {
    await axios.delete(`${API_URL}/${inquiryId}`, null, header);
    return { message: 'Inquiry deleted successfully' };
  } catch (error) {
    throw error;
  }
};
