import React from 'react'
import me from '../assets/business-man.png'

const About = () => {
  return (
    <div>
        <section id="about" className='about'>
            <div className="about-left">    
                <h1 className='first-title'>I&apos;m </h1>
                <h1 className='second-title'>Mohamed Naeem</h1>
                <p>A Front-end developer aiming to design and develop experiences that make people's lives simple
                </p>
                <button>See My Projects</button>
            </div>
            <div className="about-right">
                <img src={me} alt="" />
            </div>
        </section>
    </div>
  )
}

export default About
