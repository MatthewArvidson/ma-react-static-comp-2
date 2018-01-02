import React from 'react';
import './Header.css';

const Header = (props) => {
  return (
    <div className='Header'>
        <a>Write a story</a>
        <h1>{props.Headline}</h1>
        <a>Sign in / Sign up</a>
    </div>
  )
}

export default Header;