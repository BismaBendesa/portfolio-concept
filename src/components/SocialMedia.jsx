import React from 'react'
import github from '../assets/github.png'
import linkedIn from '../assets/linkedIn.png'
import dribbble from '../assets/dribbble.png'

export default function SocialMedia() {
  return (
    <div className='social-media'>
      <div className="headline">
        <h2>Social Media</h2>
        <p>My personal social media. Get to know more about me.</p>
      </div>
      <div className="social-media-wrapper">
        <a href='https://www.linkedin.com/in/bisma-bendesa/' className="social-media-card">
          <div className='social-media-text'>
            <h4>LinkedIn</h4>
            <p>Bisma Bendesa</p>
          </div>
          <img src={linkedIn} alt="dribbble" />
        </a>
        <a href='https://github.com/BismaBendesa' className="social-media-card">
          <div className='social-media-text'>
            <h4>Github</h4>
            <p>Bisma Bendesa</p>
          </div>
          <img src={github} alt="dribbble" />
        </a>
        <a href='https://dribbble.com/BismaBendesa' className="social-media-card">
          <div className='social-media-text'>
            <h4>Dribbble</h4>
            <p>bendesa_bisma</p>
          </div>
          <img src={dribbble} alt="dribbble" />
        </a>
      </div>
    </div>
  )
}
