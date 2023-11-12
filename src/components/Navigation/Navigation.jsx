import React from 'react'
import css from './Navigation.module.css'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthIsSignedIn } from 'redux/authSelectors';

const Navigation = () => {
    const isSignedIn = useSelector(selectAuthIsSignedIn);
  return (
    <nav>
        <NavLink className={css.logo} to="/">
            Phonebook
        </NavLink>
        {isSignedIn && <NavLink className={css.contacts} to="/contacts">Contacts</NavLink>}
    </nav>
  )
}

export default Navigation;
