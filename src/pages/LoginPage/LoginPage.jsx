import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { clearAuthError, loginThunk } from 'redux/authSlice';
import { toast } from 'react-toastify';
import { selectAuthError } from 'redux/authSelectors';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import css from './LoginPage.module.css';

const schema = yup
  .object({
    email: yup.string().required().email(),
    password: yup.string().min(8).max(15).required(),
  })
  .required()

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
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
          type= "email"
          id="userEmail"
          placeholder="Enter your email"
          {...register('email')}
        />
        {<p className={css.error}>{errors.email?.message}</p>}
      </label>
      <label>
        <span className={css.loginSpan}>Password:</span>
        <input
          className={css.loginInput}
          type= "password"
          id="userPassword"
          placeholder="Enter your password"
          autoComplete="off"
          {...register('password')}
        />
        {<p className={css.error}>{errors.password?.message}</p>}
      </label>
      <button className={css.loginBtn} type="submit">
        Sign In
      </button>
    </form>
  );
};

export default LoginPage;
