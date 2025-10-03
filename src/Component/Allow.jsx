import React from 'react'
import './Allow.css'
  

const Allow = ({image,text1,text2}) => {
  return (
    <div className='alow'>

      <div className='round'>
        <img src={image} alt="" />
      </div>

      <div className='roundup'>
        <h3>
          {text1}
        </h3>
        <p>
          {text2}
        </p>
      </div>

    </div>
  )
}

export default Allow