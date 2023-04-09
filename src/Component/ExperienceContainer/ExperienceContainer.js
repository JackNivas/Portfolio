import React from 'react'
import {Element} from 'react-scroll'
import Experience from '../ExperienceBox/Experience'
import './ExperienceContainer.css'

const ExperienceContainer = () => {
  return (
    <Element className="experienceContainer" id='exp'>
        <h1>Experience</h1>
        <div className="experienceContainer__info">
            <Experience number="+5" title="Clients" />
            <Experience number="+10" title="Clone Projects" style={{backgroundColor: "#f64c08"}}/>
            <Experience number="+2" title="Years Learning" />
            <Experience number="+2" title="Years Trained" />
        </div>
    </Element>
  )
}

export default ExperienceContainer