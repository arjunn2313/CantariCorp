import React, { useEffect, useState } from "react";
import "./cart.css";
import { GrCurrency } from "react-icons/gr";
import { IoCloseSharp } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { MdRemoveShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../redux/reducer";

export default function Cart() {
  const location = useLocation();
 const data = useSelector((state)=>state.token.product) 
 const dispatch = useDispatch()
 
 console.log(data)
  return (
    <>
     { data.length > 0 ?  <div className="cartHeaderCon">
       
     {data.map((itm,i)=>(
        <div className="cartHeaderConWrapper">
  <div className="cartImg">
    <img src={itm.image} />
  </div>
  <div className="cartPname">
    <h6>{itm.title} </h6>
  </div>
  <div className="cartQuantity"> {itm.quantity} Nos</div>
  <div className="cartBuy">
    <button>
      <GrCurrency /> Pay
    </button>
  </div>
  <div className="pDelete">
    <IoCloseSharp onClick={()=>dispatch(deleteProduct({id:itm.id}))}/>
  </div>
</div>
        ))}

        
      
      </div> : <div className="cartEmpty">
        <h6>CART IS EMPTY < MdRemoveShoppingCart/></h6>
        </div>}
    </>
  );
}
