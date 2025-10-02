import React from "react";
import "./Bottom.css";
import maps from "../assets/maps.png";
import mapsflags from "../assets/mapsflags.png";
import phone1call from "../assets/phone1call.png";
import phonecall from "../assets/phonecall.png";
import email from "../assets/email.png";
import em1ail from "../assets/em1ail.png";
import telephone from "../assets/telephone.png";
import tele1phone from "../assets/tele1phone.png";
import skype from "../assets/skype.png";
import sky1pe from "../assets/sky1pe.png";
import rightarrow from '../assets/rightarrow.png'

const Bottom = () => {
  return (
    <div className="follow">
      <div className="coloum">
        <div className="dodo1">
          <h2>Office</h2>
        </div>
        <div className="dodo">
          <div className="dodo2">
            <div className="boll">
              <img src={mapsflags} alt="" />
            </div>
            <h4>23 Prince Emilere, Nigeria</h4>
          </div>
        </div>

        <div className="dodo">
          <div className="dodo2">
            <div className="boll">
              <img src={phonecall} alt="" />
            </div>
            <h4>23 Prince Emilere, Nigeria</h4>
          </div>
        </div>

        <div className="dodo">
          <div className="dodo2">
            <div className="boll">
              <img src={em1ail} alt="" />
            </div>
            <h4>23 Prince Emilere, Nigeria</h4>
          </div>
        </div>

        <div className="dodo">
          <div className="dodo2">
            <div className="boll">
              <img src={tele1phone} alt="" />
            </div>
            <h4>23 Prince Emilere, Nigeria</h4>
          </div>
        </div>

        <div className="dodo">
          <div className="dodo2">
            <div className="boll">
              <img src={skype} alt="" />
            </div>
            <h4>23 Prince Emilere, Nigeria</h4>
          </div>
        </div>
      </div>

      <div className="coloum">
        <div className="dodo1">
          <h2>News</h2>
        </div>
        <div className="clone">
          <div className="clone1">
            <img src="https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/06/post1-1-150x150.jpg" alt="" />
            <div className="clonechild">
              <h4>
                A Place of Silence
              </h4>
              <p>
                🕛 10 june 2025
              </p>
            </div>
          </div>
          <div className="clone1">
            <img src="https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/06/post2-1-150x150.jpg" alt="" />
            <div className="clonechild">
              <h4>
                How to create a <br />
                Logo like a Pro
              </h4>
              <p>
                🕛 10 june 2025
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="coloum">
        <div className="dodo1">
          <h2>
            Shortcuts
          </h2>
        </div>
        <div className="kire">
          <div className="wili">
            <div className="knoe"><img src={rightarrow} alt="" /><h4>Home</h4></div>
            <div className="knoe"><img src={rightarrow} alt="" /><h4>City Stores</h4></div>
            <div className="knoe"><img src={rightarrow} alt="" /><h4>News</h4></div>
            <div className="knoe"><img src={rightarrow} alt="" /><h4>Clients</h4></div>
            <div className="knoe"><img src={rightarrow} alt="" /><h4>Consultation</h4></div>
            <div className="knoe"><img src={rightarrow} alt="" /><h4>Publicity</h4></div>
            <div className="knoe"><img src={rightarrow} alt="" /><h4>Support</h4></div>
          </div>
          <div className="wili">
            <div className="knoe"><img src={rightarrow} alt="" /><h4>Maps</h4></div>
            <div className="knoe"><img src={rightarrow} alt="" /><h4>Careers</h4></div>
            <div className="knoe"><img src={rightarrow} alt="" /><h4>Employee</h4></div>
            <div className="knoe"><img src={rightarrow} alt="" /><h4>Teams</h4></div>
            <div className="knoe"><img src={rightarrow} alt="" /><h4>Benefits</h4></div>
            <div className="knoe"><img src={rightarrow} alt="" /><h4>PrivacyPolicy</h4></div>
          </div>
        </div>
      </div>

      <div className="coloum">
        <div className="dodo1">
          <h2>
            Working Hours
          </h2>
        </div>
        <div className="clown">

          <div className="triclown">
            <h4>
              Our support available to help <br />
            </h4>
            <h4>
              you 24 hours a day, five days <br />
            </h4>
            <h4>
              a week
            </h4>
          </div>

          <div className="triclown2">
           <div className="see">
              <h4>
                Monday to Thursday
              </h4>
              <h4 className="see2">
                ......
              </h4>
              <h4>
                9AM - 4PM
              </h4>
           </div>

           <div className="see">
              <h4>
                Friday 
              </h4>
              <h4 className="see2">
                .................................
              </h4>
              <h4>
                10AM - 3PM
              </h4>
            </div>

          </div>

        </div>
      </div>


    </div>
  );
};

export default Bottom;
