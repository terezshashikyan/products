import { Route, Routes } from "react-router-dom";
import './App.css';
import ProductList from "./ProductList";
import ProductDetails from './ProductDetails';
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/products" element={<ProductList/>} />
        <Route path="/products/:productKey" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
