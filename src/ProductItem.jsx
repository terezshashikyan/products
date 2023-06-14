import react from "react";

const ProductItem = ({productImg, productName, productDescription, productPrice, productKey, deleteProduct}) => {
    return (
        <div key = {productKey} className = "productItem">
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