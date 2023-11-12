import { useDispatch, useSelector } from 'react-redux';
import { selectAuthIsSignedIn, selectAuthUserData } from 'redux/authSelectors';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthMenu from 'components/AuthMenu/AuthMenu';
import { logoutThunk } from 'redux/authSlice';
import css from './Header.module.css';
import Navigation from 'components/Navigation/Navigation';

export const Header = () => {
  const isSignedIn = useSelector(selectAuthIsSignedIn);
  const userName = useSelector(selectAuthUserData).name;

  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logoutThunk());
  };

  return (  
      <header className={css.header}>
        <Navigation/>
          {isSignedIn ? (
            <UserMenu name={userName} handleClick={onLogOut} />
          ) : (<AuthMenu/>)}        
      </header>
  
  );
};
