import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Slide.css'

const Slide = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

  return (
    <div className='slidive'>
        <Carousel 
        responsive={responsive}
        containerClass='carousel-container'
        autoPlay={true}
        >
            <div className='grabr'>
                <div className='grab'>
                    <div className='well'>
                        <img src="https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/11/client1-1.jpg" alt="" />
                    </div>
                    <div className='heel'>

                        <div className='ffff'>
                            <h3 className='hhhh'>
                                John Carter
                            </h3>
                            <h3 className='nnnn'>
                                Businessman
                            </h3>
                        </div>

                        <div className='wwwww'>
                            <p>
                                Proin eget tortor risus. Donec rutrum congue leo eget malesuada. Praesent sapien massa,
                            </p>
                            <p>
                                convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus. Nulla
                            </p>
                            <p>
                                lorem porttitor accumsan tincidunt.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <div className='grabr'>
                <div className='grab'>
                    <div className='well'>
                        <img src="https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/11/client2-1.jpg" alt="" />
                    </div>
                    <div className='heel'>

                        <div className='ffff'>
                            <h3 className='hhhh'>
                                Miss. Greener
                            </h3>
                            <h3 className='nnnn'>
                                Artist
                            </h3>
                        </div>

                        <div className='wwwww'>
                            <p>
                                Proin eget tortor risus. Donec rutrum congue leo eget malesuada. Praesent sapien massa,
                            </p>
                            <p>
                                convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus. Nulla
                            </p>
                            <p>
                                lorem porttitor accumsan tincidunt.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <div className='grabr'>
                <div className='grab'>
                    <div className='well'>
                        <img src="https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/11/client3-1.jpg" alt="" />
                    </div>
                    <div className='heel'>

                        <div className='ffff'>
                            <h3 className='hhhh'>
                                John Carter
                            </h3>
                            <h3 className='nnnn'>
                                Businessman
                            </h3>
                        </div>

                        <div className='wwwww'>
                            <p>
                                Proin eget tortor risus. Donec rutrum congue leo eget malesuada. Praesent sapien massa,
                            </p>
                            <p>
                                convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus. Nulla
                            </p>
                            <p>
                                lorem porttitor accumsan tincidunt.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </Carousel>
    </div>
  )
}

export default Slide