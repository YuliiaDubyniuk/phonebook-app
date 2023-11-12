import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { clearAuthError, registerThunk } from 'redux/authSlice';
import { toast } from 'react-toastify';
import { selectAuthError } from 'redux/authSelectors';
import css from './RegisterPage.module.css';

const RegisterPage = () => {
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
    dispatch(registerThunk(data));
    reset();
  };
  return (
    <form className={css.registerForm} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={css.title}>Please sign up</h2>
      <label>
        <span className={css.registerSpan}>Email:</span>
        <input
          id="userEmail"
          placeholder="Enter your email"
          className={css.registerInput}
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
        <span className={css.registerSpan}>Name:</span>
        <input
          id="userName"
          placeholder="Enter your name or nickname"
          className={css.registerInput}
          {...register('name', { required: true, type: 'text', minLength: 4 })}
        />
        {errors.name && (
          <span className={css.error}>
            This field is required. Must contain at least 4 symbols.
          </span>
        )}
      </label>
      <label>
        <span className={css.registerSpan}>Password:</span>
        <input
          id="userName"
          placeholder="Create unique password"
          className={css.registerInput}
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

      <button className={css.registerBtn} type="submit">
        Sign Up
      </button>
    </form>
  );
};

export default RegisterPage;
