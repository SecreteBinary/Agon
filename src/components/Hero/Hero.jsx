import React from 'react'
import { hero, projectsdone, customers, arrowDark, arrowLight } from '../../assets/images';
import './Hero.scss';

const Hero = () => (
  <header id='Home'>
    <div className="info">
      <h3>Exclusive Smart Watch</h3>
      <h2>Let go of the Challenge
        See yourself better</h2>
      <p>Connect your conversations with the tools and services that you use to get the job done. With over 1,500 apps and a robust API</p>
      <div className="hero-btns">
        <a href="">Get Started <img src={arrowLight} alt="" /></a>
        <a href="">How it works <img src={arrowDark} alt="" /></a>
      </div>
      <div className="qy">
        <div className='qy-info'>
          <img src={projectsdone} alt="" />
          <div>
            <h4>+12k</h4>
            <p>Projects done</p>
          </div>
        </div>
        <div className='qy-info'>
          <img src={customers} alt="" />
          <div>
            <h4>68k</h4>
            <p>Custommers</p>
          </div>
        </div>
      </div>
    </div>
    <img src={hero} alt="hero" className='hero-img' />
  </header>
)

export default Hero