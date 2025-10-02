import React, { useState } from "react";
import Navpc from "../Component/Navpc";
import "../App.css";
import addfriend from "../assets/addfriend.png";
import check from "../assets/check.png";
import right from "../assets/right.png";
import leaf from "../assets/leaf.png";
import react from "../assets/react.png";
import hacker from "../assets/hacker.png";
import tire from "../assets/tire.png";
import code from "../assets/code.png";
import check2 from "../assets/check2.png";
import megaphone from "../assets/megaphone.png";
import Ma1n from "../Component/Ma1n";
import Count from "../Component/Count";
import Slide from "../Component/Slide";
import Bottom from "../Component/Bottom";
import Navmobile from "../Component/Navmobile";
import { Divide as Hamburger } from "hamburger-react";

const Home = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [lift, setLift] = useState(false);
  const [lift1, setLift1] = useState(false);
  const [lift2, setLift2] = useState(false);
  const [lift3, setLift3] = useState(false);
  const [lift4, setLift4] = useState(false);
  const [lift5, setLift5] = useState(false);
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <div className="lived">
        <div
          style={{
            display: isOpen ? "none" : "flex",
            position: "absolute",
            right: "0",
          }}
        >
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      <Navpc />
      <Navmobile choice={isOpen} setChoice={setOpen} />
      <div
        className="thewholeproject"
        style={{ display: isOpen ? "none" : "flex", flexDirection: "column" }}
      >
        <div className="wink">
          <h3></h3>
        </div>
        <div className="sec2">
          <div className="holder">
            <div className="bill">
              <div className="roll">
                <img src={check} alt="" />
              </div>

              <div className="font">
                <div className="fonts">
                  <h4>SMART</h4>
                  <h4 className="ddd">SOLUTIONS</h4>
                </div>
                <p>Providing Excellent Candidates</p>
              </div>
            </div>
            <div className="bill">
              <div className="roll">
                <img src={megaphone} alt="" />
              </div>

              <div className="font">
                <div className="fonts">
                  <h4>BEST</h4>
                  <h4 className="ddd">OFFERS</h4>
                </div>
                <p>Startng Small Business</p>
              </div>
            </div>
            <div className="bill">
              <div className="roll">
                <img src={addfriend} alt="" />
              </div>

              <div className="font">
                <div className="fonts">
                  <h4>Friendly</h4>
                  <h4 className="ddd">SUPPORT</h4>
                </div>
                <p>Experienced Consultants</p>
              </div>
            </div>
          </div>

          <div className="empty">
            <div className="empty2">
              <h1>Our</h1>
              <h1 className="ddd">Mission</h1>
            </div>

            <div className="divb">
              <h1>
                Build the best product, cause no unnecessary harm, use business
                to inspire <br />
                and implement solutions to the environmental crisis.
              </h1>

              <p>To create a better everyday life for the many people</p>
            </div>

            <div className="wedt">
              <div className="wooo">
                <div className="white">
                  <h1>
                    Very Useful Elements <br /> For Perfect Flow
                  </h1>

                  <div className="button">
                    <img src={right} alt="" />
                    <h6>more details</h6>
                  </div>
                  <div className="eeee"></div>
                </div>
              </div>

              <div className="wooo2">
                <div className="white">
                  <h1>
                    Live Customizer For <br /> Theme Options
                  </h1>

                  <div className="button">
                    <img src={right} alt="" />
                    <h6>more details</h6>
                  </div>
                  <div className="eeee"></div>
                </div>
              </div>

              <div className="wooo3">
                <div className="white">
                  <h1>
                    Tons of Presets For <br /> Pagebuilder
                  </h1>

                  <div className="button">
                    <img src={right} alt="" />
                    <h6>more details</h6>
                  </div>
                  <div className="eeee"></div>
                </div>
              </div>

              <div className="wooo4">
                <div className="white">
                  <h1>
                    Friendly Support Up <br /> To 6 Months
                  </h1>

                  <div className="button">
                    <img src={right} alt="" />
                    <h6>more details</h6>
                  </div>
                  <div className="eeee"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sec3">
          <div className="bigger">
            <div className="ffff">
              <h1>Our</h1>
              <h1>Services</h1>
            </div>

            <div className="thehold">
              <div className="holding">
                <div className="row">
                  <div className="ball">
                    <img src={react} alt="" />
                  </div>
                  <div className="elm3">
                    <div className="elm">
                      <h4>WordPress</h4>
                      <h4 className="ooooo">Installation</h4>
                    </div>
                    <p>Installing WordPress and Plugins</p>
                  </div>
                </div>

                <div className="row">
                  <div className="ball">
                    <img src={check2} alt="" />
                  </div>
                  <div className="elm3">
                    <div className="elm">
                      <h4>WordPress</h4>
                      <h4 className="ooooo">Installation</h4>
                    </div>
                    <p>Installing WordPress and Plugins</p>
                  </div>
                </div>

                <div className="row">
                  <div className="ball">
                    <img src={leaf} alt="" />
                  </div>
                  <div className="elm3">
                    <div className="elm">
                      <h4>WordPress</h4>
                      <h4 className="ooooo">Installation</h4>
                    </div>
                    <p>Installing WordPress and Plugins</p>
                  </div>
                </div>
              </div>

              <div className="holding2">
                <div className="row">
                  <div className="ball">
                    <img src={hacker} alt="" />
                  </div>
                  <div className="elm3">
                    <div className="elm">
                      <h4>WordPress</h4>
                      <h4 className="ooooo">Installation</h4>
                    </div>
                    <p>Installing WordPress and Plugins</p>
                  </div>
                </div>

                <div className="row">
                  <div className="ball">
                    <img src={code} alt="" />
                  </div>
                  <div className="elm3">
                    <div className="elm">
                      <h4>WordPress</h4>
                      <h4 className="ooooo">Installation</h4>
                    </div>
                    <p>Installing WordPress and Plugins</p>
                  </div>
                </div>

                <div className="row">
                  <div className="ball">
                    <img src={tire} alt="" />
                  </div>
                  <div className="elm3">
                    <div className="elm">
                      <h4>WordPress</h4>
                      <h4 className="ooooo">Installation</h4>
                    </div>
                    <p>Installing WordPress and Plugins</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Ma1n />
          </div>
        </div>
        <div className="sec4">
          <div className="sec4div1">
            <h3>Our</h3>
            <h3 className="ita">Expert</h3>
            <h3>Team</h3>
          </div>

          <div className="divset">
            <div className="divset1">
              <img
                src="https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/11/t1-1-1.jpg"
                alt=""
              />

              <div className="grow">
                <h3>Jimmy Roland</h3>

                <p>Founder, Developer</p>
              </div>
            </div>

            <div className="divset1">
              <img
                src="https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/11/t2-1-1.jpg"
                alt=""
              />

              <div className="grow">
                <h3>Jimmy Roland</h3>

                <p>Founder, Developer</p>
              </div>
            </div>

            <div className="divset1">
              <img
                src="https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/11/t4-1-1.jpg"
                alt=""
              />

              <div className="grow">
                <h3>Jimmy Roland</h3>

                <p>Founder, Developer</p>
              </div>
            </div>

            <div className="divset1">
              <img
                src="https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/11/t3-1-1.jpg"
                alt=""
              />

              <div className="grow">
                <h3>Jimmy Roland</h3>

                <p>Founder, Developer</p>
              </div>
            </div>
          </div>
        </div>

        <div className="sec5">
          <div
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            className="bin"
          >
            <div className="sec5div1">
              <h2>We're better than the rest</h2>
            </div>
            <div
              style={
                show
                  ? {
                      display: "flex",
                      height: "10%",
                      alignItems: "center",
                      paddingLeft: "50px",
                    }
                  : { display: "none" }
              }
              className="eti"
            >
              <h3>We're better than the rest</h3>
            </div>
          </div>

          <div
            onMouseEnter={() => setShow1(true)}
            onMouseLeave={() => setShow1(false)}
            className="bin"
          >
            <div className="sec5div2">
              <h2>Compete on value, not on price.</h2>
            </div>
            <div
              style={
                show1
                  ? {
                      display: "flex",
                      height: "10%",
                      alignItems: "center",
                      paddingLeft: "50px",
                    }
                  : { display: "none" }
              }
              className="eti"
            >
              <h3>We're better than the rest</h3>
            </div>
          </div>
        </div>
        <div className="sec6">
          <div className="sec6div1">
            <div className="width">
              <h3>We Will Help You To</h3>
              <h3 className="opop">Grow Your Business</h3>
            </div>
            <p>We're here to help you to finding a best way</p>
          </div>

          <div>
            <Count />
          </div>
        </div>
        {/* <div className='sec7'> */}
        <Slide />
        {/* </div> */}

        <div className="se8div44">
          <div className="sec8">
            <div className="when">
              <div
                style={lift ? { display: "flex" } : { display: "none" }}
                className="hellen"
              >
                <h4>Codevz.com</h4>
              </div>
              <div
                onMouseEnter={() => setLift(true)}
                onMouseLeave={() => setLift(false)}
                className="fixed"
              >
                <img
                  src="https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2018/01/logo1_fff-1.png"
                  alt=""
                />
              </div>
            </div>

            <div className="when">
              <div
                style={lift1 ? { display: "flex" } : { display: "none" }}
                className="hellen"
              >
                <h4 className="bb">Envato Marketplaces</h4>
              </div>
              <div
                onMouseEnter={() => setLift1(true)}
                onMouseLeave={() => setLift1(false)}
                className="fixed"
              >
                <img
                  src="https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2018/01/logo3_fff-1.png"
                  alt=""
                />
              </div>
            </div>

            <div className="when">
              <div
                style={lift2 ? { display: "flex" } : { display: "none" }}
                className="hellen"
              >
                <h4>Github.com</h4>
              </div>
              <div
                onMouseEnter={() => setLift2(true)}
                onMouseLeave={() => setLift2(false)}
              >
                <img
                  src="https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2018/01/logof_fff-1.png"
                  alt=""
                />
              </div>
            </div>

            <div className="when">
              <div
                style={lift3 ? { display: "flex" } : { display: "none" }}
                className="hellen"
              >
                <h4>jQuery Library</h4>
              </div>
              <div
                onMouseEnter={() => setLift3(true)}
                onMouseLeave={() => setLift3(false)}
              >
                <img
                  src="https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2018/01/logo5_ffff-1.png"
                  alt=""
                />
              </div>
            </div>

            <div className="when">
              <div
                style={lift4 ? { display: "flex" } : { display: "none" }}
                className="hellen"
              >
                <h4>Google.co</h4>
              </div>
              <div
                onMouseEnter={() => setLift4(true)}
                onMouseLeave={() => setLift4(false)}
              >
                <img
                  src="https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2018/01/logo2_fff-1.png"
                  alt=""
                />
              </div>
            </div>

            <div className="when">
              <div
                style={lift5 ? { display: "flex" } : { display: "none" }}
                className="hellen"
              >
                <h4>Spotify Music</h4>
              </div>
              <div
                onMouseEnter={() => setLift5(true)}
                onMouseLeave={() => setLift5(false)}
              >
                <img
                  src="https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2018/01/logo8_fff-1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <Bottom />
        <div className="sec10"></div>
      </div>
    </div>
  );
};

export default Home;
