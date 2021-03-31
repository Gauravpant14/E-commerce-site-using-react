import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col } from 'reactstrap';

const MenuHeader = () => {
    return (
        <>
       <div className="menu-wrapper">
           <Container>
               <div className="inner-items-wrapper">
                   <nav className="inner-nav">
                       <div className="inner-logo">
                            <img src={require('./../../Imgs/logo1.png').default} alt="" srcset=""/>
                       </div>
                       <div className="inner-menu-items">
                            <ul>
                                <li><b>Home</b> </li>
                                <li><b>Shop</b></li>
                                <li><b>Blog</b></li>
                                <li><b>Contact</b></li>
                            </ul>
                       </div>
                       <div className="right-inner-icons">

                      <span><FontAwesomeIcon icon={faSearch} /></span> 
                      <span><FontAwesomeIcon icon={faShoppingCart} /></span> 
                      <span><FontAwesomeIcon icon={faHeart} /></span>
                       
                       </div>
                   </nav>
               </div>
           </Container>
        </div> 
        </>
    )
}

export default MenuHeader
