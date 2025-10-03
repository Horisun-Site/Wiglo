import React from "react";
import Navpc from "../Component/Navpc";
import "./This.css";
import Bottom from "../Component/Bottom";
import Allow from "../Component/Allow";
import email from '../Assets/email.png'
import telephone from '../Assets/telephone.png'
import twitter from '../Assets/twitter.png'
import facebook from '../Assets/facebook.png'
import maps from '../Assets/maps.png'
import phone1call from '../Assets/phone1call.png'


const Contact = () => {
  return (
    <div>
      <div></div>

      <Navpc />

      <div className="rel">
        <div className="helder">
          <div className="logo"></div>
          <div className="olado">
            <div className="olado1">
              <div className="theone">
                <div className="iono">
                  <h3>
                    Send Your
                  </h3>
                  <h3 className="ionodiv">
                    Message
                  </h3>
                </div>
                <div className="willy">

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <label htmlFor="nameinput">
                      Your Name (*)
                    </label>
                    <input className="input-field" type="text" id="nameinput" />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <label htmlFor="emailinput">
                      Your Email (*)
                    </label>
                    <input className="input-field" type="text" id="email" />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <label htmlFor="nameinput">
                      Phone
                    </label>
                    <input className="input-field" type="text" id="phoneinput" />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <label htmlFor="nameinput">
                      Department
                    </label>
                    <input className="input-field" type="text" id="departmentinput" />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <label htmlFor="nameinput">
                      Your Question
                    </label>
                    <textarea className="input-field3 " name="" id="questioninput"></textarea>
                  </div>

                </div>

                <button className="but1ton">
                  Submit
                </button>
              </div>
              <div className="thetwo">
                <div className="twoone">
                  <div className="twooneone">
                    <Allow image={email} text1="Support" text2="horisunola@gmail.com" />
                    <Allow image={phone1call} text1="Phone" text2="+234 (916) 529-7719" />
                    <Allow image={maps} text1="Address" text2="Ofada,OgunState." />
                  </div>
                  <div className="twooneone">
                    <Allow image={telephone} text1="Fax" text2="+234 (916) 529-7719" />
                    <Allow image={twitter} text1="Twitter" text2="@Mr white" />
                    <Allow image={facebook} text1="Facebook" text2="scott emmy" />
                  </div>
                </div>
                <div className="twotwo">
                  <img src="https://i.pinimg.com/736x/0f/75/6b/0f756b3ccbc17d360ebfe2a31483091b.jpg" alt="" />
                </div>
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

export default Contact;
