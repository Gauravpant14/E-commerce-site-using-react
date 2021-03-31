/* eslint-disable no-unused-vars */
import React from 'react'

import { Container, Row, Col } from 'reactstrap';

const SmHeader = () => {
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
                            <li> My Account </li>
                            <li> En </li>
                            <li> USD </li>
                        </ul>
                    </div>
                   
                </div>
                </Container>
            </header>
        </>
    )
}

export default SmHeader
