import React from 'react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <React.Fragment>
      <header className='sticky-top'>
        <span className='fs-1 fw-bold fst-italic text-primary'>Sara Wieszałka</span>
      </header>
      <div className='container'>
        <p className='text-white-75 mb-5'>
          Hello! My name is Sara Wieszałka and I am currently looking for a job as a Junior React Frontend Developer.
          Below you can find my recent project.
        </p>
        <Link to='/green-grocery' className='btn btn-primary btn-xl' href='#about'>
          GreenGrocery
        </Link>
      </div>
    </React.Fragment>
  );
};

export default AboutMe;
