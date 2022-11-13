import React from 'react'
import {FiGithub,FiLinkedin,FiTwitter} from 'react-icons/fi'
import {CgWebsite} from 'react-icons/cg'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
   <>
   <div className='main'>
   <div className='socialIcon'>
    <FiGithub/>
    <FiLinkedin/>
    <FiTwitter/>
    <CgWebsite/>
   </div>
   <div className='content'>
    <p>Hi! my name is</p>
    <p className='title'>Reeba Siddiqui</p>
    <p className='title' style={{color:'#86C232'}}>Web developer</p>
    <p className='textinfo'>I am a junior web developer. Passionate about building first-class web applications. Specialized in Frontend development and also worked with backend. Relevant skills include Database, Debugging, and more..</p>
    <div className='homebtn'>
    <a href="https://drive.google.com/file/d/1kpBgMTOdQ0PNalKYGSuvc2x7nqyBPgrI/view?usp=sharing" className='btn' target="_blank">Download resume</a>
    <a href="" className='btn2'>
    <Link to='/resume' style={{textDecoration:'none', color:'#fff'}}>

      Checkout Resume
    </Link>
      </a>
    </div>
   </div>
   </div>
   </>
  )
}

export default Home
