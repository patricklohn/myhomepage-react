import React from 'react'
import "./Skills.css"

const Skills = () => {
  return (
    <div>
        <h1>MySkills</h1>
        <div className='container-skills'>
            <div className='skill'>
                <a href="#"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="Logo Html" /></a>
                <h4>Html:</h4>
                <span>(HyperText Markup Language ou Linguagem de Marcação de Hipertexto)</span>
            </div>
        </div>
    </div>
  )
}

export default Skills
