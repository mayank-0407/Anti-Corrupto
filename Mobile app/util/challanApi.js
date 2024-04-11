import axios from "axios";

const API_URL = "http://localhost:3000/challan";

export const addChallan = async (challan) => {
	try {
		const response = await axios.post(`${API_URL}/add`, challan);
		return response;
	} catch (error) {
		throw error;
	}
};

export const getVehicleChallans = async (userId) => {
	try {
		const response = await axios.get(`${API_URL}/view`);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const getChallansById = async (challanId) => {
	try {
		const response = await axios.get(`${API_URL}/view/${challanId}`);
		return response.data;
	} catch (error) {
		throw error;
	}
};
