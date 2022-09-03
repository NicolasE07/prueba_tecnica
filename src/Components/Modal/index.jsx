import React from 'react';

import style from './styles.module.css'


const Modal = ({setInsert , setModal, insert}) => {

    const handleSubmit= (e)=>{
        setInsert({
            name: e.target.name.value,
            email: e.target.email.value,
            gender: e.target.gender.value,
            status: e.target.status.value,
        })
        setModal(false)
    }

    return ( 
        <div className={style.div}>
            <form onSubmit={handleSubmit} className={style.form} action="">
                <input name="name" type="text" placeholder='Name'/>
                <input name='email' type="text" placeholder='Email'/>
                <input name='gender' type="text" placeholder='gender'/>
                <input name='status' type="text" placeholder='status'/>

                <button  type='submit'>Insertar</button>
            </form>
        </div>
     );
}
 
export {Modal};