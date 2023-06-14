import React, { useState } from 'react';

const AddProductInput = () => {
      return (
      <>
        <input
          type="text"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          placeholder="Enter product name"
        />
        <input
          type="text"
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
          placeholder="Enter image URL"
        />
        <input
          type="text"
          value={newProduct.description}
          onChange={(e) =>
            setNewProduct({ ...newProduct, description: e.target.value })
          }
          placeholder="Enter product description"
        />
        <button onClick={handleAddProduct}>Add Product</button>
    </>
      );
  
};

export default AddProductInput;
