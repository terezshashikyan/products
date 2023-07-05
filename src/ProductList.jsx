import React, { useState, useEffect} from 'react';
import ProductItem from "./ProductItem";

const ProductList = () => {
  const [products, setProducts] = useState(() => {
    return JSON.parse(localStorage.getItem("products")) || [{ productImg: "https://st.mngbcn.com/rcs/pics/static/T4/fotos/outfit/S20/47010043_30-99999999_01.jpg?ts=1667559794423&imwidth=502&imdensity=2", 
                                                              productName: "Natural fiber basket",
                                                              productDescription: "100% cattail. Natural fibers. Braided design. Oval design. Two handles.", 
                                                              productPrice: "US$ 69.99" }, 
                                                              {productImg: "https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37086704_37_B.jpg?ts=1666337770051&imwidth=502&imdensity=2", 
                                                               productName: "Fringed blanket 5512x748 in",
                                                               productDescription: "1Plain fabric. Soft texture. Fringed finish. Very warm fabric. Ideal for cold seasons. An essential item for your living room or bedroom.", 
                                                               productPrice: "US$ 59.99" }, 
                                                               {productImg: "https://st.mngbcn.com/rcs/pics/static/T4/fotos/outfit/S20/47055873_52-99999999_01.jpg?ts=1678896241731&imwidth=502&imdensity=2", 
                                                               productName: "Striped cushion case",
                                                               productDescription: "With this cotton garment you support our investment in the mission of Better Cotton. ", 
                                                               productPrice: "US$ 15.99" }, 
                                                               {productImg: "https://st.mngbcn.com/rcs/pics/static/T4/fotos_alt/S20/47001255_08_02_D1.jpg?ts=1667562241000&imwidth=502&imdensity=2", 
                                                               productName: "Natural fiber tray 25x18cm",
                                                               productDescription: "Size: 25x18. Natural fibers. 100% rattan. Accessories for your home. ", 
                                                               productPrice: "US$ 19.99" }, 
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
      <h2 className = "headName"> MANGO </h2>

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

      <div className = "productList">
        {products.map((product, index) => (
          <ProductItem productKey = {index} productImg = {product.productImg} productName = {product.productName} productDescription = {product.productDescription} productPrice = {product.productPrice} deleteProduct = {(e) => {e.stopPropagation(); deleteProduct(index)}}/>
        ))}
      </div>

      
    </div>
  );
};

export default ProductList;
