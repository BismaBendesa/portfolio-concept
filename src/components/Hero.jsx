import React from 'react'
import myPicture from '../assets/foto-sic-no-background-part1.png'

export default function Hero() {
  return (
    <div className="hero-wrapper">
      <div className='hero'>
        <h1 className='title'>Portfolio Design</h1>
        <div className='year'>2024</div>
        <div className='wrapper'>
          <div className='namecard'>
            <h4>Bisma Bendesa</h4>
            <p>He/Him</p>
          </div>
          <img src={myPicture} alt="mypicture" />
        </div>
      </div>
    </div>
  )
}
