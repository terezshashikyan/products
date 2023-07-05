import react from "react";
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from "react-router-dom";

const ProductItem = ({productImg, productName, productDescription, productPrice, productKey, deleteProduct}) => {
    
    const navigate = useNavigate();

    return (
        <div key = {productKey} className = "productItem" onClick={() => navigate(`/products/${productKey}`)}>
            <figure>
            <img src = {productImg}/>
            </figure>
            <section className="details">
            <h1 className="name">{productName}</h1>
            <p className="description">{productDescription}</p>
            <h1 className="price">{productPrice}</h1>
            <button className="deleteProductBtn" onClick={deleteProduct}>Delete Product</button>
            </section>
        </div>
    )
}

export default ProductItem;