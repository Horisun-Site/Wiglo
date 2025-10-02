import React, { useState } from 'react'
import CountUp from "react-countup"
import './Count.css'

const Count = () => {

    const [count,setCount] = useState(false)
  return (
    <div>
        {/* <ScrollTrigger onEnter={() => setCount(true)} onExit={() => setCount(false)}> */}
            <div className='red'>

                <div className='billo'>
                    <h2>
                        {/* { count && */}
                            <CountUp 
                            start={0} 
                            end={25}
                            duration={2.75}>
                            </CountUp>+
                    </h2>
                    <p>Years of Experience</p>
                </div>

                <div className='billo'>
                    <h2>
                        <CountUp 
                        start={0} 
                        end={45}
                        duration={3.75}>
                        </CountUp>
                    </h2>
                    <p>
                        Awards Wins
                    </p>
                </div>

                <div className='billo'>
                    <h2>
                        <CountUp 
                        start={0} 
                        end={27}
                        duration={4.75}>
                        </CountUp>k
                    </h2>
                    <p>
                    Happy Clients
                    </p>
                </div>

                <div className='billo'>
                    <h2>
                        <CountUp 
                        start={0} 
                        end={99}
                        duration={5.75}>
                        </CountUp>
                    </h2>
                    <p>
                        Perfect Products
                    </p>
                </div>

            </div>
        {/* </ScrollTrigger> */}
        
    </div>
  )
}

export default Count