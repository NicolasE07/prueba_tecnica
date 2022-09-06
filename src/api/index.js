import axios from 'axios';
const token = 'b8b84db74ed0a638cecdb1b5510ba7835bec9654043690d66691c90b51444a07';

export const getUsers = async (pagina = 1) => {
	
	const { data } = await axios.get(`https://gorest.co.in/public/v2/users?page=${pagina}`, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		responseType: 'json',
	});
	return data;
};

export const postUser = async (data) => {
	// const token ='b4063811a41791494a7ab227ec1c8d141ccfb379351e8dd4d16a11457920cfb0'
	
	axios
		.post(`https://gorest.co.in/public/v1/users`, data, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			responseType: 'json',
		})
		.then((res) => console.log(res))
		.catch((err) => console.log(err.response));
};

export const deleteUser = async (id) => {
	console.log(id);

	const response = await axios.delete(`https://gorest.co.in/public/v1/users/${id}`, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		responseType: 'json',
	});

	return console.log(response);
};

export const putUser = async (id, data) => {
	const response = await axios.put(`https://gorest.co.in/public/v1/users/${id}`, data, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},

		responseType: 'json',
	});

	return console.log(response)
};
