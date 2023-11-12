import React from 'react';
import css from './AuthMenu.module.css';
import { NavLink } from 'react-router-dom';

const AuthMenu = () => {
  return (
    <div className={css.authMenu}>
      <NavLink
        className={({ isActive }) =>
          `${css.authLink} ${isActive ? css.active : ''}`
        }
        to="/register"
      >
        Sign up
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${css.authLink} ${isActive ? css.active : ''}`
        }
        to="/login"
      >
        Sign in
      </NavLink>
    </div>
  );
};

export default AuthMenu;
