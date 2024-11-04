import React from 'react'
import figma from '../assets/figma.png'
import maze from '../assets/maze.png'
import mysql from '../assets/mysql.png'
import react from '../assets/react.png'
import laravel from '../assets/laravel.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import zettabyte from '../assets/zettabyte.png'
import destar from '../assets/destar.png'
import serene from '../assets/serene.png'

export default function AboutMe() {
  return (
    <div className='about-me'>
      <div className="headline">
        <h2>About Me</h2>
        <p>A little bit information about myself</p>
      </div>
      <div className="about-me-section">
        <div className="title-blue">
          <div className='line-blue'></div>
          <span>Introduction</span>
        </div>
        <div className="description">
          <p>I am Bisma. 21 years old, Third Year College Student in Udayana majoring Informatics based in Bali, Indonesia. I started my journey in IT Industry since high vocational school since I was 18 years old. I am capable to design website as a UI/UX Designer, And I am also a Fullstack Website Developer. I also have some hobbies like playing guitar, playing video games, and working out. Happy to see you guys here! Come and have a look!</p>
        </div>
        <div className="title-blue">
          <div className='line-blue'></div>
          <span>Skillsets</span>
        </div>
        <div className='tools-wrapper'>
          <h3>UI/UX</h3>
          <div className='tools'>
            <div className='tools-card'>
              <img src={figma} alt="figma" />
              <p>Figma</p>
            </div>
            <div className='tools-card'>
              <img src={maze} alt="maze" />
              <p>Maze</p>
            </div>
          </div>
          <h3>Web Development</h3>
          <div className='tools'>
            <div className='tools-card'>
              <img src={laravel} alt="laravel" />
              <p>Laravel</p>
            </div>
            <div className='tools-card'>
              <img src={react} alt="ReactJs" />
              <p>React</p>
            </div>
            <div className='tools-card'>
              <img src={mysql} alt="MySQL" />
              <p>MySQL</p>
            </div>
            <div className='tools-card'>
              <img src={tailwind} alt="Tailwind" />
              <p>Tailwind</p>
            </div>
            <div className='tools-card'>
              <img src={javascript} alt="Vanilla Javascript" />
              <p>VanillaJs</p>
            </div>
          </div>

          <div className="title-black">
            <span>Experience</span>
            <div className='line-black'></div>
          </div>
          <div className='experience-card-wrapper'>
            <div className="experience-card">
              <img src={zettabyte} alt="zettabyte" />
              <h3 className='company-name'>Zettabyte Pte Ltd</h3>
              <p className='company-type'>Software Development Company</p>
              <p className='duration'>Mar 2021 - Jun 2021</p>
              <p className='exp-description'>Working as Internship UI/UX Designer and Front-End. I was given a task to redesign one of their product, ADMTC a website platform to manage education in France. Together with the team with just 1.5 months, we manage to complete the website design. and the front-end code. My approach was user-centered design that involves user directly to the phase of the product redesign. 
              What I Learned:
              <ol>
                <li>Git & Github</li>
                <li>Angular Basics</li>
                <li>HTML, SCSS, JS</li>
                <li>Figma & Basic Design</li>
              </ol>
              </p>
            </div>
            <div className="experience-card">
              <img src={destar} alt="destar" />
              <h3 className='company-name'>Destar Studio</h3>
              <p className='company-type'>Startup IT Company</p>
              <p className='duration'>Jun 2022 - Jul 2023</p>
              <p className='exp-description'>My position was Internship UI/UX Designer and Front-End. My responsibilities was to construct a travel website app that provides plane ticketing, tour program, car rental, hotel booking, etc. I uses design thinking method to construct the product to discover user needs and pain points.
              What I Learned:
              <ol>
                <li>Tailwind CSS</li>
                <li>HTML, CSS, JS</li>
                <li>Figma & Basic Design</li>
              </ol>
              </p>
            </div>
            <div className="experience-card">
              <img src={serene} alt="serene" />
              <h3 className='company-name'>Serene Bali</h3>
              <p className='company-type'>Startup Property Management Company</p>
              <p className='duration'>May 2024 - Current</p>
              <p className='exp-description'>I am currently working as Freelancer Fullstack Website Developer in this company. The company requires a website for operational and manage the property listings also consultation platform for their users. My approach is using a design thinking method to construct a useful application for the user.
              What I use for this project:
              <ol>
                <li>Tailwind CSS</li>
                <li>Laravel</li>
                <li>MySQL</li>
                <li>Backend Development</li>
                <li>Figma</li>
                <li>Usability Testing</li>
              </ol>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
