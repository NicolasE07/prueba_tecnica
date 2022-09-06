import React, {useState} from 'react';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Spin, Space, Col, Button } from 'antd';
import { setModal } from '../../actions';
import { Modal } from '../Modal';
import { Bottons } from '../Bottons';
import {BsPencilSquare} from 'react-icons/bs'
import {MdDelete} from 'react-icons/md'

const Tabla = ({ users, loading }) => {
	const [type, setType]=useState('')
	const [user, setUser]=useState({})
	const modal = useSelector((state) => state.modal);
	const dispatch = useDispatch();
	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: 'Email',
			dataIndex: 'email',
			key: 'email',
		},
		{
			title: 'Gender',
			dataIndex: 'gender',
			key: 'gender',
		},
		{
			title: 'Status',
			dataIndex: 'status',
			key: 'status',
		},
		{
			title: 'Action',
			key: 'action',
			render: (_, user) => (
				<Space size="middle">
					<Button className="buttons" onClick={()=>{
						setType('editar')
						setUser({...user})
						handlePost()
					}} type="primary">
						<BsPencilSquare/>
					</Button>
					<Button onClick={()=>{
						setType('delete')
						setUser({...user})
						handlePost()
					}} className="buttons"> <MdDelete/> </Button>
				</Space>
			),
		},
	];

	const handlePost = () => {
		
		dispatch(setModal(!modal));
		console.log(modal);
	};

	return (
		<>
			
			
				<div>
					<Table
						pagination={false}
						loading={loading}
						rowKey={users.map((i) => {
							return i.id;
						})}
						width={100}
						columns={columns}
						dataSource={users}
					/>
					<Bottons />

					<div className="Button">
						<Button onClick={()=>{
							setType('')
							handlePost()
						}}>Insertar</Button>
					</div>
					{modal && <Modal func={handlePost} user={user} type={type}/>}
				</div>
			
		</>
	);
};

export { Tabla };
