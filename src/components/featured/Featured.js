import React from "react";
import "./featured.css";
import { CiLocationArrow1 } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Featured() {
  const navigate = useNavigate();
  return (
    <>
      <div className="featured">
        <div className="brandCircle">
          <img src="assets\Group 2 836.png" style={{ width: "100%" }} />
        </div>

        <div className="selectBox">
          <span>
            <span style={{ color: "#0051A0" }}>Products</span> Within
          </span>
          <span>Your Province</span>
          <div className="shopSelectBox">
            <span>Select Province</span>
            <button>
              <RiArrowDropDownLine />{" "}
            </button>
          </div>
          <img src="assets\Layer 6.png" className="selIm" />
          <img src="assets\Layer 2.png" className="selIm2" />
        </div>
        <div className="products">
          <div className="productSlid-1">
            <div className="product">
              <div className="pImg" style={{ backgroundColor: "#DDFDF0" }}>
                <div className="new">
                  <span> New</span>
                </div>
                <img src="assets\p2.png" />
              </div>
              <div className="pdHead">
                <span>Beef Fry Mix</span>
              </div>

              <div className="pdBtn">
                <p>150g</p>
                <button title="view">
                  <MdArrowOutward className="arrow" />
                </button>
              </div>
            </div>

            <div className="product">
              <div className="pImg" style={{ backgroundColor: "#F7FDDD" }}>
                <div className="new">
                  <span> New</span>
                </div>
                <img src="assets\p4.png" />
              </div>
              <div className="pdHead">
                <span>Beef Fry Mix</span>
              </div>

              <div className="pdBtn">
                <p>150g</p>
                <button title="view">
                  <MdArrowOutward className="arrow" />
                </button>
              </div>
            </div>
          </div>

          <div className="productSlid-2">
            <div className="product" style={{ borderRadius: "15px" }}>
              <div className="pImg" style={{ backgroundColor: "#DDE4FD" }}>
                <div className="new">
                  <span> New</span>
                </div>
                <img src="assets\p3.png" />
              </div>
              <div className="pdHead">
                <span>
                  Duck Roast Instant
                  <br /> Curry Mix
                </span>
              </div>

              <div className="pdBtn">
                <p>150g</p>
                <button title="view">
                  <MdArrowOutward className="arrow" />
                </button>
              </div>
            </div>

            <div className="product">
              <div className="pImg" style={{ backgroundColor: "#F2E7FF" }}>
                <div className="new">
                  <span> New</span>
                </div>
                <img src="assets\p1.png" />
              </div>
              <div className="pdHead">
                <span>
                  Duck Roast Instant
                  <br /> Curry Mix
                </span>
              </div>

              <div className="pdBtn">
                <p>150g</p>
                <button title="view">
                  <MdArrowOutward className="arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
