import React from 'react';
import style from './styles.module.css'


const Nav = () => {
    return ( 
        <nav className={style.nav}>
            <div className={style.div}>Users</div>
            <div className={style.div}>Dashboard</div>
        </nav>
     );
}
 
export {Nav};