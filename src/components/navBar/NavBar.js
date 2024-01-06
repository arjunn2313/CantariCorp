import React from "react";
import "./navBar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LuLogIn } from "react-icons/lu";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { SlHandbag } from "react-icons/sl";
import { FiShoppingCart } from "react-icons/fi";
import { logout } from "../../redux/reducer";
import { BiLogOutCircle } from "react-icons/bi";

export default function () {
  const dispatch = useDispatch()
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate()
  const data = useSelector((state)=>state.token.person)
  console.log(data)

 const handleLogout = () =>{
  dispatch(logout(null))
  navigate('/login')
 }
  return (
    <div  
      className = {location.pathname ==='/shop' ? "shopNav" : "navBar"}
    >
      <div className="navWrap">
        <div className="navLogo">
          <img src="assets\currease logo 1.png" />
        </div>

        <div className="navPath" style={data &&{justifyContent:'center'}}>
          <ul>
            <li>
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/aboutus"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/contactus"
              >
                Contact Us
              </Link>
            </li>
            <li>
            <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/shop"
              >
                     <span className="lishop">Shop <SlHandbag/></span>

              </Link>
            </li>
            <li>
            { data && <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/cart"
              > 
                <FiShoppingCart style={{ marginLeft: '0px',fontSize:'18px'}}/>
              </Link>}
            </li>
          </ul>
        </div>

        <div className="">
         {data  ? 
         
        <button className="navLogin" style={{backgroundColor:'red',color:"#fff"}}
        onClick={handleLogout}
        > <BiLogOutCircle style={{ marginLeft: '0px',fontSize:'18px'}} /> Logout</button> : <button className="navLogin" onClick={()=>navigate('/login')}>
        <LuLogIn style={{ marginLeft: '0px',fontSize:'14px'}} /> Login 
          </button>}
        </div>
      </div>

      {location.pathname === "/shop" && (
        <>
        <div className="shopWrap">
        <img src="assets\Layer 6.png" className="layer1-shop"/>
          <img src="assets\Layer 2.png" className="layer2-shop"/>
          <div className="shopHeader">
            <h2>
              <span>Products</span> Within
              <br />
              Your Province
            </h2>
          </div>

        <div className="box">
          <div className="shopSelectBox">
            <span>Select Province</span>
            <button>
              <RiArrowDropDownLine />{" "}
            </button>
          </div>
          </div>
          </div>
        </>
      )}
    </div>
  );
}
