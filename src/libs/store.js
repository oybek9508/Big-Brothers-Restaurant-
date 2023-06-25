import { BASE_URL, api } from "./api";

export const fetchStore = async () => {
	const res = await api.callApi({
		url: `${BASE_URL}/stores`,
		method: "GET",
	});
	return res.data;
};
