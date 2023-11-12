import React from 'react';
import css from './UserMenu.module.css';

const UserMenu = ({ name, handleClick }) => {
  return (
       <div className={css.userMenu}>
        <p className={css.userName}>Hello, {name}</p>
        <button className={css.logOutBtn} onClick={handleClick}>Log Out</button>
      </div>
  );
};
 
export default UserMenu;
