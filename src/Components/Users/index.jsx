import React from 'react';

const Users = ({ item }) => {
	return (
		<tr>
			<td>{item.name}</td>
			<td>{item.email}</td>
			<td>{item.gender}</td>
			<td>{item.status}</td>
		</tr>
	);
};

export {Users};
