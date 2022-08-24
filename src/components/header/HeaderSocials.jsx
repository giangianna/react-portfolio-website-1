import React from 'react'
import {BsLinkedin, BsFacebook} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://id.linkedin.com/in/abangbule" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/giangianna" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://www.facebook.com/junot.schmitt/" target="_blank" rel="noreferrer"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials