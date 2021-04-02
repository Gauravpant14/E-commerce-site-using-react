import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./../../redux/index";
import { fetchCat } from "./../../redux/index";
import { catFilter } from "./../../redux/index";
import { Container } from "reactstrap";

import styled from "styled-components";

const ProductArea = ({ name, className }) => {
  console.log("props is" + name);
  // const[cId,uId] = useState()
  const state1 = useSelector((state) => state.products);
  const state2 = useSelector((state) => state.category);
  const state3 = useSelector((state) => state.id);
  console.log("State 3 is " + state3);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCat());
    console.log("state 2 is " + state2);
    // dispatch(() => fetchProducts())
  }, []);
  // console.log("state is "+ state);

  const fun1 = (e) => {
    const cId = e.target.id;
    //    uId(id)
    //    console.log("id is " + cId);
    dispatch(catFilter(cId));
  };

  const fun2 = () => {
    const allCard = document.querySelectorAll(".allCard");
    console.log(document.querySelectorAll(".allCard"));
    for (let i = 0; i < allCard.length; i++) {
      allCard[i].style.display = "none";
    }

    const filterCard = document.querySelectorAll(".filterCard");
    for (let i = 0; i < filterCard.length; i++) {
        filterCard[i].style.display = "block";
    }
  };

  const disFun = () => {
    dispatch(fetchProducts());
    const allCards = document.querySelectorAll(".allCard");
    for (let i = 0; i < allCards.length; i++) {
      allCards[i].style.display = "block";
    }
    const filterCard = document.querySelectorAll(".filterCard");
    for (let i = 0; i < filterCard.length; i++) {
        filterCard[i].style.display = "none";
    }
  };

  return (
    <div className={className}>
      <Container>
        <div className="cat-head">
          <h3>PRODUCT OVERVIEW</h3>
        </div>
        <div className="all-products-cat">
          <div className="all-cat-buttons">
            <button
              className="Product-btn"
              onClick={() => {
                disFun();
              }}
            >
              All Products
            </button>

            {state2.category.map((e) => (
              <button
                className="cat-btn"
                id={e._id}
                onClick={(e) => {
                  fun1(e);
                  fun2();
                }}
              >
                {e.categoryName}{" "}
              </button>
            ))}
          </div>
        </div>
        <div className="all-products">
            
          {state3.id.map((e) => (
            <div className="card filterCard">
              <div className="card-img">
                <img src={e?.image} alt="img" />
              </div>
              <div className="card-body">
                <span>
                  {" "}
                  <strong>Product Name :</strong> {e?.p_name}
                </span>
                <br />
                <span>
                  <strong>Product Price :</strong>
                  {e?.price}
                </span>
                <br />
                <span>
                  <strong>Description :</strong>
                  {e?.description}
                </span>
                <br />
              </div>
            </div>
          ))}

          {state1.products.map((e) => (
            <div className="card allCard">
              <div className="card-img">
                <img src={e?.image} alt="img" />
              </div>
              <div className="card-body">
                <span>
                  {" "}
                  <strong>Product Name :</strong> {e?.productName}
                </span>
                <br />
                <span>
                  <strong>Product Price :</strong>
                  {e?.price}
                </span>
                <br />
                <span>
                  <strong>Description :</strong>
                  {e?.description}
                </span>
                <br />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

const ProductsSection = styled(ProductArea)`

.cat-head {
    padding-top: 18px;
}
.cat-head h3{
    font-family: Poppins-Bold;
    font-size: 36px;
    line-height: 1.1;
    text-transform: uppercase;
}
.all-cat-buttons .Product-btn {
    color: #000000;
    border-color: #797979;
    font-family: Poppins-Regular;
    border:none;
    
    font-size: 17px;
    line-height: 1.2;
    border-bottom: 1px solid black;
    
}
.all-cat-buttons{
    margin-top:15px
}
.all-cat-buttons button {
    margin-right: 32px;
}

.cat-btn{
    color: #333;
    border-color: #797979;
    font-family: Poppins-Regular;
    border:none;
    
    font-size: 17px;
    line-height: 1.2;
   
}
.cat-btn:hover{
    border-bottom: 1px solid black;
    border-color: #797979;
}
.all-products{
    display:flex;
    flex-wrap :wrap;
    justify-content: space-around;
    /* margin-top: 30px;
    margin-left: -15px;
    margin-right: -15px; */
    margin:30px -15px 0px -15px;
}
    
}
.card{
    width:28%;
   margin: 15px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.5);
}
.card-img{
    border-bottom:1px dashed #c4c1c1;
}
.card-img img {
    height: 250px;
    width:100%;
}

`;

export default ProductsSection;
