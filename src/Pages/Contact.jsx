import React from "react";
import Navpc from "../Component/Navpc";
import "./This.css";
import Bottom from "../Component/Bottom";
import Allow from "../Component/Allow";

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
                    <Allow/>
                    <Allow/>
                    <Allow/>
                  </div>
                  <div className="twooneone">
                    <Allow/>
                    <Allow/>
                    <Allow/>
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
