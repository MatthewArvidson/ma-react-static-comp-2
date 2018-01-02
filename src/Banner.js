import React from 'react';
import Button from './Button';
import './Banner.css';

const Banner = () => {
  return (
    <div className='Banner'>
      <div className='banner-left'>
        <h2>Articles That Make You Want To Run Away</h2>
        <p>The following is a collection of articles that will melt your brain. Do not read any further unless you wish to effectively labotomize your higher functions.</p>
        <div className='button-holder'>
          <Button buttonType='dark'
                  buttonText='Get started' />
          <Button buttonType='light'
                  buttonText='Learn more' />
        </div>
      </div>
      <div className='banner-right'></div>
    </div>
  )
}

export default Banner;
