import React from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import bg from "./../../Imgs/slide-03.jpg";


const CarouselSec = ({ className }) => {
  return (
    <div className={className}>
      <section >
        <Container>
          <div className="inner-carousel">
            <div className="carousel-heading1">
              <span className="car-head-1">Clothing Collection 2021</span>
            </div>
            <div className="carousel-heading2">
              <h2>NEW ARRIVELS</h2>
            </div>
            <div className="carousel-btn">
              <button className="">SHOP NOW</button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

const Wrapper = styled(CarouselSec)`
  
  section{
    background-image: url(${bg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 500px;
  }
  .car-head-1{
    font-family: Poppins-Regular;
    font-size: 28px;
    line-height: 1.2857;
  }

  h2{
    font-family: PlayfairDisplay-Bold;
    font-size: 60px;
    line-height: 1.1;
    text-transform: uppercase;
  }
  button {
      border-radius: 17px;
      background-color: #717fe0;
      min-width: 161px;
    height: 46px;
        font-family: Poppins-Medium;
    font-size: 15px;
    line-height: 1.466667;
    text-transform: uppercase;
    color:#fff;
    border:none;
  }
  .inner-carousel{
      position:relative;
      top:150px;
  }
  .carousel-heading1{
      padding:20px 0px
  }
  .carousel-btn{
      padding:15px 0px
   }
`;

export default Wrapper;
