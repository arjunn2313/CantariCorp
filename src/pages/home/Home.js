import React from "react";
import "./home.css";
import Featured from "../../components/featured/Featured";
import { CiLocationArrow1 } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { FaRegCirclePlay } from "react-icons/fa6";

export default function Home() {

  const navigate = useNavigate()

  return (
    <>
      <div>
        <div className="homeIntro">
          <div className="homeTitle">UNIQ CURRY POWDERS</div>
          <div className="homeDesc">
            <span>
              Wake Up Your
              <img
                id="emoji"
                src="assets\emo 1.png"
                style={{ width: "67px", height: "66px" }}
              />
            </span>
            <span>Taste Buds with Us</span>
          </div>
        </div>

        <div className="bottom">
          <div>
            <div className="layer1"></div>
            <img
              src="assets\Layer 4.png"
              id="img1"
              style={{ width: "163px", height: "282px" }}
            />
          </div>

          <div>
            <div className="layer2"></div>
            <img
              src="assets\Layer 2.png"
              id="img2"
              style={{ width: "243px", height: "363px" }}
            />
          </div>
        </div>

        <Featured />
    
      </div>
      <div className="shopNavv">
      <button className="more"
          onClick={()=>navigate('/shop')}>
          More Products <CiLocationArrow1 /> </button>
          </div>
      <div className="home-bottom">
        <div className="bottom-header">
          <h1>
            <span>Cook</span> With Favorite Recipe{" "}
          </h1>
     
        </div>
        <div className="sec-3">
          <h4>YUMMY DUCK ROAST</h4>
          <span>Next Recipe</span>
        </div>
        <div className="bottom-p2">
          <div className="pr-s1">
            <h6>
              Step 01 ---- <span>Step 02 ---- Step 3 -</span>
            </h6>

            <p>
            Prepared with Currease’s Duck roast instant curry mix, <br/>the tender
            and juicy meat with its crispy skin glazed with <br/> honey can be the
            perfect holiday main dish for occasions<br/> such as Thanksgiving,
            Christmas, or New Year’s eve.
          </p>
          
          <p>
          Honey can be the perfect holiday main dish for occasions<br/> such as Thanksgiving, Christmas, or New Year’s eve.
          </p>

          </div>
          <div className="bottom-img1">
            <img src="assets\image 55.png" />
          </div>

          <div className="bottom-img1 play">
            <img src="assets\Mask group 1.png" />
            <FaRegCirclePlay className="play-button"/>
          </div>
        </div>
      </div>
    </>
  );
}
