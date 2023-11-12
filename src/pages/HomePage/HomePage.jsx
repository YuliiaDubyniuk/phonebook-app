import React from 'react';
import Image from '../../images/phonebook.png';
import css from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Wellcome to digital phonebook!</h1>
      <div className={css.imgThumb}>
        <img src={Image} alt="" width="400" height="auto" />
      </div>
      <p className={css.text}>
        <span>Use this app to stay in touch with important to you people.</span> <br /> Create your phonebook. Adding and
        deleting contacts can't be easier. All you need is sign up or sign in (if
        you already have an account).
      </p>
    </div>
  );
};

export default HomePage;
