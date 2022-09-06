import React, { useState } from 'react';
import { Button } from 'antd';
import style from './styles.module.css';
import { getUsers } from '../../api';
import { setUsers } from '../../actions';
import { useDispatch } from 'react-redux';



const Bottons = () => {
	const [page, setPage] = useState(1);
	const dispatch = useDispatch();

	const nextPage = () => {
        setPage(prev => prev+1)
		const fetchUsers = async () => {
			const userRes = await getUsers(page+1);
			dispatch(setUsers(userRes));
		};
		fetchUsers();
	};
    const backPage = ()=>{
        setPage(prev => prev-1)
		const fetchUsers = async () => {
			const userRes = await getUsers(page-1);
			dispatch(setUsers(userRes));
		};
		fetchUsers();
    }

	return (
		<div className={style.containerButtons}>
			{page === 1 ? <Button disabled onClick={backPage}>Back</Button>: <Button onClick={backPage}>Back</Button>}
			<Button onClick={nextPage} type="primary">
				{' '}
				Next{' '}
			</Button>
		</div>
	);
};

export { Bottons };
