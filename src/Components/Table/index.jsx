import React, { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';
import { Users } from '../Users';
import { Modal } from '../Modal';

const Table = () => {
	const [loading, setLoading] = useState(true);
	const [users, setUsers] = useState([]);
    const [modal, setModal]=useState(false)
    const [insert, setInsert]=useState({})
    
    const handleModal = ()=>{
        setModal(prevState=> !prevState)
    }

	useEffect(() => {
        axios.get('https://gorest.co.in/public/v2/users')
        .then(({data}) =>{
            setLoading(false)
            setUsers(data)
        })
    }, []);

	return (
        <>
        {loading && <h1>Cargando</h1>}
        {!loading && (
            <div className="div">
			<table className="table">
				<caption>Users</caption>
				<thead className="thead">
					<tr>
						<th>Name</th>
						<th>email</th>
						<th>gender</th>
						<th>status</th>
					</tr>
				</thead>
				<tbody className="tbody">
                    {users.map((item)=> <Users item={item}/>)}
                </tbody>
			</table>
            <button onClick={handleModal} type='button'>Insertar</button>

            {modal && <Modal setInsert={setInsert} insert={insert} setModal={setModal}/>}
		</div>
        )}
        </>

		
	);
};

export { Table };
