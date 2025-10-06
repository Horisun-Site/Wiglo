import React, { useState } from "react";
import Navpc from "../Component/Navpc";
import "./This.css";
import check2 from "../assets/check2.png";
import Count from "../Component/Count";
import video from "../assets/video.mp4";
import Bottom from "../Component/Bottom";
import { Divide as Hamburger } from 'hamburger-react'
import Navmobile from "../Component/Navmobile";

const AboutUs = () => {
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
      <div className="thewholeproject"
      style={{ display: isOpen ? "none" : "flex", flexDirection: "column" }}
      >
        <div className="rec1">
          <div className="logo">
          </div>
          <div className="rec1div1">
            <div className="reada">
              <div className="rowe">
                <h2>About</h2>
                <h2 className="ion">Company</h2>
              </div>
              <div className="electron">
                <h3>
                  Simply put, our mission is to help people grow their <br />
                  businesses. This is why millions of executives in growing{" "}
                  <br />
                  companies rely on XtraTheme.com to acquire the knowledge,{" "}
                  <br />
                  products and services they need to run and grow their <br />
                  businesses and careers. It's also where thousands of <br />
                  advertisers reach and engage these valuable buyers, <br />
                  generating well over $1.6 billion in incremental <br />
                  annual revenue.
                </h3>
              </div>
            </div>
            <div className="background">
              <img
                src="https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/11/tt1-1.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="rec1div1">
            <div className="background">
              <img
                src="https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/11/tt1-1.jpg"
                alt=""
              />
            </div>
            <div className="reada2">
              <div className="rowe">
                <h2>Why</h2>
                <h2 className="ion">Choose Us?!</h2>
              </div>
              <div className="electron">
                <h3>
                  Xtra is redefining the marketplace for business purchases by{" "}
                  <br />
                  making it dramatically easier for buyers to discover, learn{" "}
                  <br />
                  more about, compare and buy the products and services they{" "}
                  <br />
                  need to run and grow their businesses.
                </h3>
              </div>
              <div className="colo">
                <div className="wedd">
                  <div className="now">
                    <div className="balle">
                      <img src={check2} alt="" />
                    </div>
                    <h5>Competitive Salary</h5>
                  </div>
                  <div className="now">
                    <div className="balle">
                      <img src={check2} alt="" />
                    </div>
                    <h5>Competitive Salary</h5>
                  </div>
                  <div className="now">
                    <div className="balle">
                      <img src={check2} alt="" />
                    </div>
                    <h5>Competitive Salary</h5>
                  </div>
                  <div className="now">
                    <div className="balle">
                      <img src={check2} alt="" />
                    </div>
                    <h5>Competitive Salary</h5>
                  </div>
                </div>
                <div className="wedd">
                  <div className="now">
                    <div className="balle">
                      <img src={check2} alt="" />
                    </div>
                    <h5>Competitive Salary</h5>
                  </div>
                  <div className="now">
                    <div className="balle">
                      <img src={check2} alt="" />
                    </div>
                    <h5>Competitive Salary</h5>
                  </div>
                  <div className="now">
                    <div className="balle">
                      <img src={check2} alt="" />
                    </div>
                    <h5>Competitive Salary</h5>
                  </div>
                  <div className="now">
                    <div className="balle">
                      <img src={check2} alt="" />
                    </div>
                    <h5>Competitive Salary</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="after">
          <div className="asasas">
            <div className="sec6div1">
              <div className="width">
                <h3 className="lilian">We Will Help You To</h3>
                <h3 className="opop">Grow Your Business</h3>
              </div>
              <p>We're here to help you to finding a best way</p>
            </div>

            <div>
              <Count />
            </div>
          </div>
          <video autoPlay muted src={video}></video>
        </div>
        <div className="willa">
          <div className="willadiv">
            <div className="sec4div1">
              <h3>Our</h3>
              <h3 className="ita">Expert</h3>
              <h3>Team</h3>
            </div>
            <div className="willadivset">
              <h3>Meet our professional team meambers</h3>
            </div>
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
        <div className="se8div44">
          <div className="se8div44div">
            <div className="suck">
              <h4>Our</h4>
              <h4 className="suck1">Partners</h4>
            </div>
            <p>Famous companies trusted us, why you are not?</p>
          </div>

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

export default AboutUs;
