import axios from "axios";

export const fetchEmails = async (page = 1) => {
	return await axios
		.get(`https://flipkart-email-mock.now.sh/?page=${page}`)
		.then((res) => res.data);
};

export const fetchBody = async (id) => {
	return await axios
		.get(`https://flipkart-email-mock.now.sh/?id=${id}`)
		.then((res) => res.data);
};
