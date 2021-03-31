import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import Wrapper from "./compoments/Carousel/CarouselSec";
// import CarouselSec from "./compoments/Carousel/CarouselSec";
import MenuHeader from "./compoments/MenuHeader/MenuHeader";
import ProductsSection from "./compoments/ProductPart/ProductArea";

import SmHeader from "./compoments/SmHeader/SmHeader";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <SmHeader />
      <MenuHeader />
      <Wrapper />
      <ProductsSection />
    </div>
    </Provider>
  );
}

export default App;
