/* eslint-disable no-unused-vars */
import React from 'react'

import { Container} from 'reactstrap';
import Wrapper from '../Carousel/CarouselSec';
import MenuHeader from '../MenuHeader/MenuHeader';
import ProductsSection from '../ProductPart/ProductArea';

const SmHeader = ({history}) => {

    const routerFun = () => {
      history.push("./signup")
    }

    return (
        
        <>
            <header>
            <Container>
                <div className="header-items">
                    
                    <div className="left-side">
                        <ul>
                            <li>Free Shipping For Standard order over 300$</li>
                        </ul>
                    </div>
                    <div className="right-side">
                        <ul>
                            <li> Help & Faq </li>
                            <li> <span onClick={routerFun}>My Account</span>  </li>
                            <li> En </li>
                            <li> USD </li>
                        </ul>
                    </div>
                   
                </div>
                </Container>
            </header>
            <MenuHeader />
            <Wrapper />
            <ProductsSection />
        </>
    )
}

export default SmHeader
