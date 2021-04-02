import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import Wrapper from "./compoments/Carousel/CarouselSec";
// import CarouselSec from "./compoments/Carousel/CarouselSec";
import MenuHeader from "./compoments/MenuHeader/MenuHeader";
import ProductsSection from "./compoments/ProductPart/ProductArea";

import SmHeader from "./compoments/SmHeader/SmHeader";
import Registration from "./../src/compoments/Registration-page/Registration";
import Homepage from "./compoments/Homepage/Homepage";

function App() {
  return (

 
    <Provider store={store}>
    <div className="App">
      <Homepage />
   
      {/* <SmHeader /> */}
      {/* <MenuHeader />
      <Wrapper />
      <ProductsSection name="Gaurav"/> */}
    </div>
    </Provider>
  
  );
}

export default App;
