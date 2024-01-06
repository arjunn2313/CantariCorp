import React from "react";
import "./aboutus.css";
import { MdArrowOutward } from "react-icons/md";
import { FaRegCirclePlay } from "react-icons/fa6";

export default function Aboutus() {
  return (
    <div>
      {/* SECTION  1*/}
      <div className="abtsSection1">
        <div className="sec1Wrapper">
          <div className="sec1Slide1">
             <img src="assets\Mask group.png" />
    
          </div>

          <div className="sec1Slide2">
            <h2>
              <span>A Novel Product</span>
              <br />
              In The Food Market
            </h2>

            <p>
              As a retorted curry base gravy produced particularly by keeping
              the <br /> millennials in mind, “Currease”, unlike other instant
              alternatives to <br />
              home-cooked food, ensure to deliver locally produced fresh <br />{" "}
              ingredients and easy-to-follow recipes so that anyone can prepare
              a <br />
              quality home-cooked dish that does not compromise on time and{" "}
              <br /> well-being.
            </p>
            <div className="pdbtn">
              <button>
                Products <MdArrowOutward />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION  2*/}

      <div className="abtSec2">
        <div className="sec2Slid1">
          <img src="assets\Mask group 1.png" />
          <FaRegCirclePlay className="play-button"/>  
        </div>

        <div className="sec2Slid2">
          <p>
            All Currease products are manufactured using “retort” technology.
            Retorting is one of the <br/>major techniques used for the thermal
            processing of food products that are packed either in <br/> semi-rigid
            flexible laminates or in metal or alloy cans. The technology
            provides the advantage <br/>of processing and packing the food together;
            which makes it more commercially stable with <br/>safe and effective
            shelf life.
          </p>
        </div>
      </div>
    </div>
  );
}
