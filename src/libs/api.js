import axios from "axios";

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

class Api {
	callApi({ url, method, data }) {
		const requestParams = {
			url,
			method,
			data,
		};
		return axios(requestParams);
	}
}

export const api = new Api();
