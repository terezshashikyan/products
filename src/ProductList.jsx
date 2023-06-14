import React, { useState, useEffect} from 'react';
import ProductItem from "./ProductItem";

const ProductList = () => {
  const [products, setProducts] = useState(() => {
    return JSON.parse(localStorage.getItem("products")) || [{productImg: "https://cdn.shopify.com/s/files/1/1002/7150/products/New-Mockups---no-hanger---TShirt-Yellow.jpg?v=1639657077", 
                                             productName: "T-Shirt",
                                             productDescription: "T-Shirt", 
                                             productPrice: "5$" }, 
                                             ]
                                            });

useEffect(() => {
    window.localStorage.setItem("products", JSON.stringify(products));
}, [products]);                                           

  
const [newProduct, setNewProduct] = useState({
                                                productImg: '',
                                                productName: '',
                                                productDescription: '',
                                                productPrice: '',
                                              });
                                            
  const handleAddProduct = () => {
    {
        if (
          newProduct.productName.trim() !== '' &&
          newProduct.productImg.trim() !== '' &&
          newProduct.productDescription.trim() !== '' &&
          newProduct.productPrice.trim() !== ''
        ) {
          setProducts([...products, newProduct]);
          setNewProduct({ productImg: '', productName: '', productDescription: '', productPrice: '',});
        }
      }
  };

  const deleteProduct = (index) => {
    const copiedProducts = [...products];
    copiedProducts.splice(index, 1);
    setProducts(copiedProducts);
  };

  return (
    <div>
      <h2>Product List</h2>
      <div className = "productList">
        {products.map((product, index) => (
          <ProductItem productKey = {index} productImg = {product.productImg} productName = {product.productName} productDescription = {product.productDescription} productPrice = {product.productPrice} deleteProduct = {deleteProduct}/>
        ))}
      </div>

      
      <div className = "addProductInput">
        <input
          type="text"
          value={newProduct.productName}
          onChange={(e) => setNewProduct({ ...newProduct, productName: e.target.value })}
          placeholder="Enter product name"
        />
        <input
          type="text"
          value={newProduct.productImg}
          onChange={(e) => setNewProduct({ ...newProduct, productImg: e.target.value })}
          placeholder="Enter image URL"
        />
        <input
          type="text"
          value={newProduct.productDescription}
          onChange={(e) =>
            setNewProduct({ ...newProduct, productDescription: e.target.value })
          }
          placeholder="Enter product description"
        />

          <input
          type="text"
          value={newProduct.productPrice}
          onChange={(e) =>
            setNewProduct({ ...newProduct, productPrice: e.target.value })
          }
          placeholder="Enter product price"
        />
        <button onClick={handleAddProduct}>Add Product</button>
    </div>
    </div>
  );
};

export default ProductList;
