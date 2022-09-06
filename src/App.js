import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers, setLoading } from './actions';
import { Nav } from './Components/Nav';
import { Tabla } from './Components/Tabla';
import {getUsers} from './api'


import './App.css';

function App() {

  const loading = useSelector(state => state.loading)
  const users = useSelector(state => state.users)
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUsers = async()=>{
      const userRes = await getUsers()
      dispatch(setUsers(userRes))
      dispatch(setLoading(false))
    }
    fetchUsers()
  }, []);

	return (
		<>
			<Nav />
			<Tabla users={users} loading={loading} />
      
		</>
	);
}



export default App;
