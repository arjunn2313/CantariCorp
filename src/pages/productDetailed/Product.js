import React, { useEffect, useState } from "react";
import "./product.css";
import { GoArrowUpRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/reducer";

export default function Product() {
   const {id} = useParams()
   const [data,setData] = useState({})
   const navigate = useNavigate()
   const[count,setCount] = useState(1)
   const[loading,setLoading] = useState(true);
   const dispatch = useDispatch()
   useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
      console.log(res.data)
      setData(res.data)
      setLoading(false)
    })
   },[])

   const handleAddToCart = () =>{
    dispatch(addProduct({  ...data, quantity: count}));
         navigate('/cart')
   }

   const handleAddProduct = (action) =>{
    if(action == "i") { 
      setCount(count+1)
    } 
    if(action == "d"){
      setCount(count - 1)
    }
    }
  
  return (
    <div className="prodDetaild">
      {loading ? <>loading....</>:<div className="prodWrapper">
        <div className="navHome">
          <span onClick={()=>navigate('/shop')}> <GoArrowLeft/> Back to products</span>
        </div>

        <div className="detailsContainer">
          <div className="detImgCon">
            <img src={data && data.image} />
          </div>
          <div className="p-slide2">
            <div className="p-details">
              <span>New</span>
              <h2>{data && data.title}</h2>
            </div>

            <div className="p-desc">
              <h6>Description</h6>
              <ul>
                <li>
                  {data && data.description}
                </li>
              </ul>
            </div>

            <div className="small-pd">
              <div className="sm-1">
                <img src="assets\Group 3935.png" id="imgfc" />
              </div>
              <img src="assets\Group 3935.png" />
              <img src="assets\Group 3935.png" />
            </div>

            <div className="incridients">
              <h6>Category :</h6>
              <ul>
                <li>{data && data.category}</li>      
              </ul>
            </div>
            <div className="pfooter" >
                <button className="buyBtn" onClick={handleAddToCart}>Add to cart <GoArrowUpRight/></button>
                <span className="qntyCon">
                  <button className="pNosBtnn" onClick={()=>handleAddProduct("d")}
                  disabled={count <= 1}
                  >-</button>
                  <span className="qntyNum">{count}</span>
                  <button className="pNosBtnn" onClick={()=>handleAddProduct("i")}>+</button>
                </span>
            </div>
          </div>
        </div>
      </div>}
    </div>
  );
}
