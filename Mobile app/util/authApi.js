import axios from "axios";
import { backendURL } from "./config";
import { getSessionToken } from "./tokenStore";

const API_URL = `${backendURL}/auth`;

const getHeader = async () => {
	const sessionToken = await getSessionToken();
	return {
		headers: {
			Authorization: sessionToken, // Session token in headers
		},
	};
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
	console.log("userData in api: ", userData);
	try {

		const response = await axios.post(`${API_URL}/login`, userData);

		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const logoutUser = async () => {
	try {
		const header = await getHeader();
		const response = await axios.post(`${API_URL}/logout`, null, header);
		if (response.status == 200) return true;
		else return false;
	} catch (error) {
		console.log(error);
	}
};

export const isSessionValid = async (sessionId) => {
	try {
		const header = await getHeader();
		const response = await axios.get(
			`${API_URL}/verifysession/${sessionId}`,
			header
		);
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
		const header = await getHeader();
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
		const header = await getHeader();
		const response = await axios.get(
			`${API_URL}/getuseremail/${clientId}`,
			header
		);
		if (response.status == 200) {
			return response;
		}
	} catch (error) {
		console.log(error);
	}
};

