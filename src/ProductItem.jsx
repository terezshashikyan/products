import react from "react";

const ProductItem = ({productImg, productName, productDescription, productPrice, productKey, deleteProduct}) => {
    return (
        <div key = {productKey}>
            <h3 className="name">{productName}</h3>
            <img src = {productImg}/>
            <p className="description">{productDescription}</p>
            <h3 className="price">{productPrice}</h3>
            <button className="deleteProduct" onClick={deleteProduct}>Delete Product</button>
        </div>
    )
}

export default ProductItem;