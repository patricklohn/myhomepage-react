import React from 'react'
import './Home.css'
import BarNav from '../components/BarNav'
import Skills from '../components/Skills'

const Home = () => {
  return (
    <div className='container-home'>
      <BarNav/>
      <div className='container-body'>
        <Skills/> 
      </div>
    </div>
  )
}

export default Home
