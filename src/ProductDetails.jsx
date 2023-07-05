import react from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = (props) => {

  const { productKey } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(() => {return JSON.parse(localStorage.getItem("products"))[productKey]});
                                         

      return (
         <>
             <div>
               <h1>{product.productName}</h1>
               <img src = {product.productImg}/>
               <p>{product.productDescription}</p>
               <h1>{product.productPrice}</h1>
               <p>Product Key: {productKey}</p>
             </div>
         </>
       );
}

export default ProductDetails;