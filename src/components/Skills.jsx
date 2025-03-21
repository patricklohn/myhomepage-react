import React from 'react'
import "./Skills.css"

const Skills = () => {
  return (
    <div>
        <h1>MySkills</h1>
        <div className='container-skills'>
            <div className='skill'>
                <div className='skill-html'>
                  <a href="#"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="Logo Html" /></a>
                  <span>Linguagem de Marcação de Hipertexto</span>
                  </div>
            </div>
            <div className='skill'>
                <div className='skill-html'>
                  <a href="#"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="Logo Html" /></a>
                    <span>Linguagem de estilo em cascata</span>
                  </div>
            </div>
            <div className='skill'>
                <div className='skill-html'>
                  <a href="#"><img src="https://handlebarsjs.com/images/handlebars_logo.png" alt="Logo Html" /></a>
                    <span>linguagem de modelagem de templates semântica minimalista</span>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
