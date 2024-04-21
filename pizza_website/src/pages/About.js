import React from 'react'
import MultiplePizzas from "../assets/multiplePizzas.jpeg"
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
        <div 
        className='aboutTop' 
        style={{backgroundImage: `url(${MultiplePizzas})`}}
        ></div>
        <div className='aboutBottom' >
            <h1>ABOUT ARTHUR</h1>
            <p>
                He is the best dog
            </p>
        </div>
    </div>
  )
}

export default About
