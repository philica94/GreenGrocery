import React from 'react';
import { Link } from 'react-router-dom';
import classes from './AboutMe.module.css';

const AboutMe = () => {
  return (
    <div className={classes.main}>
      <div className={classes.photoWrapper}>
        <img src='./images/Sara.jpeg' />
        <div className={classes.photoCover}></div>
        <div className={classes.photoMargin}></div>
      </div>
      <div className='d-flex align-items-center flex-column justify-content-center h-100'>
        <div className={classes.typewriter}>
          <p>Hello! My name is Sara Wieszałka.</p>
          <p>I am looking for a job as a Junior Front-end Developer.</p>
          <p>Please check out the application that I created.</p>
        </div>

        <Link to='/green-grocery' className={`btn btn-primary btn-lg ${classes.link}`}>
          Go to the application
        </Link>
      </div>
    </div>
  );
};

export default AboutMe;
