import axios from "axios";
import React, { useEffect, useState } from "react";
import "./login.css";
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/reducer";


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState('')
 
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const data = useSelector((state)=>state.token.person)
  console.log(data)

  const handleLogin = (e) =>{
      e.preventDefault()
      const error = {}

      if(!username || !password){
        error.user = "please enter username & password"
      }

      if(Object.keys(error).length > 0){
        setError(error)
      }else{
        const credential ={
          username : username,
          password : password
       }

       axios.post("https://fakestoreapi.com/auth/login",credential).then((res)=>{
            console.log(res.data.token)
            dispatch(login(res.data.token))
            navigate('/')
       }).catch((err)=>{
          console.log(err)
          setError(err.response)
       })
      }
  }
  return (
    <div className="loginContainer">
      <div className="logMiniContainer">
        <div className="lgSlide1">
          <h3>Welcome</h3>
          <h6>
              Don't have an account ? Create your account it takes <br /> less
              than a minute
            </h6>
            <div className="signup">
            <button onClick={()=>navigate('/register')}>Sign Up</button>
            </div>
        </div>

        <div className="lgSlide2">
          <div className="loginTitle">
            <h3>Login</h3>
            <h6>
              Don't have an account ? Create your account it takes <br /> less
              than a minute
            </h6>
          </div>

          <div className="inputGroup">
            <input type="text" placeholder="username" 
            onChange={(e)=>setUsername(e.target.value)} value={username}
            />
            <input type="text" placeholder="password"  
            onChange={(e)=>setPassword(e.target.value)} value={password}
            />
          </div>
          <div className="forgot">
            <span> forgot password ? </span>
          </div>
          <div className="loginButton">
            <button className="login" onClick={handleLogin}>Login</button>
          </div>
      {error && <div className="warning">**{error.user} {error.data}**</div>}
          <div className="socialHandle">
            <h6>login with social media</h6>
            <div className="lgSocialAccounts">
              <button>
                <FaFacebook className="facebook" /> facebook
              </button>
              <button>
                <FaGooglePlusG className="google" /> google
              </button>
              <button>
                <FaTwitter className="twitter" /> twitter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

