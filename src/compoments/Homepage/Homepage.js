import React from 'react'
import Wrapper from '../Carousel/CarouselSec'
import MenuHeader from '../MenuHeader/MenuHeader'
import ProductsSection from '../ProductPart/ProductArea'
import SmHeader from '../SmHeader/SmHeader'
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import Registration from '../Registration-page/Registration'

const Homepage = () => {
    return (
        <>
        <Router >
          <Switch>
            <Route exact path="/" component={SmHeader} />
            <Route exact path="/signup" component={Registration} />
          </Switch>
        </Router>
          {/* <SmHeader /> */}
          {/* <MenuHeader /> */}
          {/* <Wrapper /> */}
          {/* <ProductsSection /> */}
        </>
    )
}

export default Homepage
