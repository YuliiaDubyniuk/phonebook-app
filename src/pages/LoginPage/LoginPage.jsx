import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { clearAuthError, loginThunk } from 'redux/authSlice';
import { toast } from 'react-toastify';
import { selectAuthError } from 'redux/authSelectors';
import css from './LoginPage.module.css';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);

  useEffect(() => {
    if (error) {
      toast.error('Oops! Something goes wrong...Try again.');
      dispatch(clearAuthError());
    }
  }, [error, dispatch]);

  const onSubmit = data => {
    dispatch(loginThunk(data));
    reset();
  };
  return (
    <form className={css.loginForm} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={css.title}>Please sign in</h2>
      <label>
        <span className={css.loginSpan}>Email:</span>
        <input
          className={css.loginInput}
          id="userEmail"
          placeholder="Enter your email"
          {...register('email', {
            required: true,
            type: 'email',
            pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
          })}
        />
        {errors.email && (
          <span className={css.error}>
            This field is required. Example: myemail@mail.com
          </span>
        )}
      </label>
      <label>
        <span className={css.loginSpan}>Password:</span>
        <input
          className={css.loginInput}
          id="userPassword"
          placeholder="Enter your password"
          {...register('password', {
            required: true,
            type: 'password',
            pattern: '(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}',
          })}
        />
        {errors.password && (
          <span className={css.error}>
            This field is required. Must contain at least one number and one
            uppercase and lowercase letter, and at least 8 or more characters.
          </span>
        )}
      </label>

      <button className={css.loginBtn} type="submit">
        Sign In
      </button>
    </form>
  );
};

export default LoginPage;
