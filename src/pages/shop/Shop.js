import React, { useEffect, useState } from "react";
import "./shop.css";
import { MdArrowOutward } from "react-icons/md";
import { IoArrowDownOutline } from "react-icons/io5";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Shop() {
  const [data, setData] = useState([]);
  const navigate = useNavigate()
  const [initialLoad,setInitialLoad] = useState(1)
  const [itemsNum,setItemsNum] = useState(9)
  const[loading,setLoading] = useState(true)
  const[slide,setSlide] = useState(1000)

  useEffect(() => {
    // window.scrollTo(0, 0);
    fetchData()
  }, [initialLoad]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products?limit=${itemsNum*initialLoad}`
      );
      setData(response.data);
      setLoading(false)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleMore = () =>{
    setInitialLoad((prevload)=> prevload + 1)
  }

  const handleView = (id) =>{
    window.scrollTo(0, 0);
    navigate(`/product/${id}`)
  }

  const handleMove = (action) =>{
    if(action=="L"){
      setSlide(slide + 400)
    }else{
      setSlide(slide - 400)
    }
  }

  return (
    <div className="shop">
      <div className="shopWrap1">
        <h4>showing {itemsNum} of 20</h4>
        {loading ? <>loading...</>:<div className="product-card">

          {data &&
            data.map((product, i) => (
              <div className="product" key={product.id} onClick={()=>handleView(product.id)}>
                <div className="pImg">
                  <div className="new">
                    <span> New</span>
                  </div>
                  <img src={product.image} />
                </div>
                <div className="pdHead">
                  <span>
                    {product.title}
                  </span>
                </div>

                <div className="pdBtn">
                  <p>150g</p>
                  <button title="view"
                  onClick={()=>handleView(product.id)}
                  >
                    <MdArrowOutward className="arrow" />
                  </button>
                </div>
              </div>
            ))}


        </div>}
        <div className="moreBtn">
          <button onClick={handleMore}>
            More <IoArrowDownOutline />
          </button>
        </div>
      </div>

      <div className="shopWrap2">
        <div className="wrap2header">
          <h1>
            You May <span>Also Like</span>
          </h1>
          <div>
           <button onClick={()=>handleMove("L")} disabled={slide == 1000} className="slidBtn" ><MdOutlineArrowBackIosNew /></button> 
           <button onClick={()=>handleMove("R")} disabled={slide == -1000} className="slidBtn"> <MdOutlineArrowForwardIos /></button> 
          </div>
        </div>

        <div className="slideProducts">

          {data.slice(0,9).map((item,k)=>(
            <div className="slide-product" style={{transform:`translatex(${slide}px)`}}  onClick={()=>handleView(item.id)}>
            <div className="pImg">
              <div className="new">
                <span> New</span>
              </div>
              <img src={item.image} />
            </div>
            <div className="pdHead">
              <span>
                 {item.title}
              </span>
            </div>

            <div className="pdBtn">
              <p>150g</p>
              <button title="view" 
                onClick={()=>handleView(item.id)}
              >
                <MdArrowOutward className="arrow" />
              </button>
            </div>
          </div>
          ))}

         

        

    
        </div>
      </div>
    </div>
  );
}
