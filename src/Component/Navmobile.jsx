import React from 'react'
import { Divide as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom'
import './Navmobile.css'

const Navmobile = ({choice,setChoice}) => {
  return (
    <div className='melon'>

      <img src="https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2018/02/logo-2n.png" alt="" />
    

      <div style={{display:choice?'flex':'none',height:'100vh',background:'url("https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/08/slider1-1-1.jpg")',
        flexDirection:"column",backgroundPosition:"center", backgroundSize:"cover", backgroundRepeat:"no-repeat"}} className='maxman'>
        <Hamburger direction="right" toggled={choice} toggle={setChoice}/>

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
      
      </div>
      
      

    </div>
  )
}

export default Navmobile