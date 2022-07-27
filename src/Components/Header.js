import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div className='header'>
      <div>image</div>
      <div className='titulo'>
        <div className='letter'>
          <span>O</span>
        </div>
        <div className='letter'>
          <span>G</span>
        </div>
        <div className='letter'>
          <span>A</span>
        </div>
        <div className='letter'>
          <span>B</span>
        </div>
        <div className='letter'>
          <span>R</span>
        </div>
        <div className='letter'>
          <span>I</span>
        </div>
        <div className='letter'>
          <span>E</span>
        </div>
        <div className='letter'>
          <span>L</span>
        </div>
        <div className='letter'>
          <span>F</span>
        </div>
      </div>
      <div>
        <a href='/About'>About</a>
        <a href='/Galery'>Galery</a>
        <a href='/Contact'>Contact</a>
      </div>
    </div>
  );
};
