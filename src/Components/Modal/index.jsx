import React from 'react';
import style from './styles.module.css';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setInsert } from '../../actions';
import { getUsers, postUser, deleteUser, putUser } from '../../api';
import { setUsers, setLoading } from '../../actions';

const Modal = ({ func, type = '', user }) => {
	const users = useSelector((state) => state.users);
	const insert = useSelector((state) => state.insert);
	const dispatch = useDispatch();

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		console.log(name, value);
		dispatch(
			setInsert({
				...insert,
				[name]: value,
			})
		);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const fetchUsers = async () => {
			const userRes = await getUsers();
			dispatch(setUsers(userRes));
			dispatch(setLoading(false));
		};
		fetchUsers();
		postUser(insert);
		func();
	};

	const handleDelete = async () => {
		await deleteUser(user.id);
		const fetchUsers = async () => {
			const userRes = await getUsers();
			dispatch(setUsers(userRes));
			dispatch(setLoading(false));
		};
		fetchUsers();
		func();
	};

	const handlePut = async (e) => {
		e.preventDefault();
		const fetchUsers = async () => {
			const userRes = await getUsers();
			dispatch(setUsers(userRes));
			dispatch(setLoading(false));
		};
		fetchUsers();
		putUser(user.id, insert);
		func();
	};

	return (
		<div className={style.container}>
			<div className={style.card}>
				<div className={style.cardHead}>
					{type === 'delete' ? <h3>Delete</h3> : type === 'editar' ? <h3>Editar</h3> : <h3>Insertar</h3>}
				</div>
				<div className={style.cardBody}>
					{type === 'delete' ? (
						<h3>
							Estas seguro que quieres eliminar a <b>{user.name} </b>
						</h3>
					) : type === 'editar' ? (
						<div>
							<h3>Estas editando a {user.name}</h3>
							<form id="form" onSubmit={handlePut} action="">
								<input
									onChange={handleOnChange}
									type="text"
									name="name"
									placeholder={`Name: ${user.name}`}
								/>
								<input
									onChange={handleOnChange}
									type="text"
									name="email"
									placeholder={`Email: ${user.email}`}
								/>
								<select onChange={handleOnChange} name="gender">
								<option value="female">Female</option>
								<option value="male">
									Male
								</option>
							</select>
							<select onChange={handleOnChange} name="status">
								<option value="active">Active</option>
								<option value="inactive">
									Inactive
								</option>
							</select>
							</form>
						</div>
					) : (
						<form id="form" onSubmit={handleSubmit} action="">
							<input onChange={handleOnChange} type="text" name="name" placeholder="name" />
							<input onChange={handleOnChange} type="text" name="email" placeholder="email" />
							{/* <input onChange={handleOnChange} type="text" name="gender" placeholder="gender" />
							<input onChange={handleOnChange} type="text" name="status" placeholder="status" /> */}
							<select onChange={handleOnChange} name="gender">
								<option value="female">Female</option>
								<option value="male">
									Male
								</option>
							</select>
							<select onChange={handleOnChange} name="status">
								<option value="active">Active</option>
								<option value="inactive">
									Inactive
								</option>
							</select>
						</form>
					)}
				</div>

				<div className={style.cardFooter}>
					{type === 'delete' ? (
						<div>
							<Button onClick={func}>Cancel</Button>
							<button onClick={handleDelete} className={style.buttonSubmit} type="submit">
								Ok
							</button>
						</div>
					) : type === 'editar' ? (
						<div>
							<Button onClick={func}>Cancel</Button>
							<button form="form" className={style.buttonSubmit} type="submit">
								Ok
							</button>
						</div>
					) : (
						<div>
							<Button onClick={func}>Cancel</Button>
							<button className={style.buttonSubmit} form="form" type="submit">
								Ok
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export { Modal };
