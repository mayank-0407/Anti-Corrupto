import axios from "axios";

const API_URL = "http://localhost:3000/auth";

export const signUpUser = async (userData) => {
	// console.log(userData);
	try {
		const response = await axios.post(`${API_URL}/signup`, userData);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const loginUser = async (userData) => {
	console.log("apiLogin:", userData);
	try {
		const response = await axios.post(`${API_URL}/login`, userData);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const logoutUser = async (sessionToken) => {
	console.log("apiLogin:", sessionToken);
	try {
		const response = await axios.post(`${API_URL}/logout/${sessionToken}`);
		if (response.status == 200) return true;
		else return false;
	} catch (error) {
		console.log(error);
	}
};

export const isSessionValid = async (sessionId) => {
	console.log(sessionId);
	try {
		const response = await axios.get(`${API_URL}/verifysession/${sessionId}`);
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
		const response = await axios.get(`${API_URL}/getuser/${sessionId}`);
		if (response.status == 200) {
			console.log("in status 200");
			return response;
		}
		else
		{
			console.log("in error");
		}
	} catch (error) {
		console.log(error);
	}
};