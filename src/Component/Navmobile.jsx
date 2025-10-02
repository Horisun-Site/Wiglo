import React from 'react'
import { Divide as Hamburger } from 'hamburger-react'

const Navmobile = ({choice,setChoice}) => {
  return (
    <div style={{display:choice?'flex':'none',height:'100vh',backgroundColor:'red'}} className='maxman'>
      <Hamburger direction="right" toggled={choice} toggle={setChoice}/>
    </div>
  )
}

export default Navmobile