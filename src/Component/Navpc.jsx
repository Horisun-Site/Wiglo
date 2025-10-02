import React from 'react'
import './Navpc.css'
import logo1 from '../assets/logo1.png'
import { Link } from 'react-router-dom'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'




const Navpc = () => {

  
  return (
    <div className='navpc'>

      <div className='winter'>
        <img src={logo1} alt="" />
      </div>

      <ul className='summer'>

        <Link className='with' to={'/'}>
          HOME
        </Link>

        <Link className='with' to={'/about'}>
          ABOUT
        </Link>

        <Link className='with' to={'/contact'}>
          SERVICES
        </Link>

        <Link className='with' to={'/contact'}>
          BLOG
        </Link>

        <Link className='with' to={'/contact'}>
          SHOP
        </Link>

        <Link className='with' to={'/contact'}>
          FAQ
        </Link>

        <Link className='with' to={'/contact'}>
          CONTACT
        </Link>

      </ul>

      <div className='images'>
        <div className='weed'>
          <img src={facebook} alt="" />
        </div>
        <div className='weed1'>
          <img src={twitter} alt="" />
        </div>
        <div className='weed2'>
          <img src={instagram} alt="" />
        </div>

        <div className='gap'>
          (+234) 916 529 7719
        </div>

      </div>

    </div>
  )
}

export default Navpc