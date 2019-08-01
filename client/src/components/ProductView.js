import React, { useState } from "react";

const ProductView = ({ products }) => {
    const deleteProduct = (e, id) => {
        console.log("clicked", id)
        fetch(`http://localhost:5000/product/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(res => console.log(res));
    };

    return (
        <div>
            <h1>Products</h1>
            {products.map((product)=> {
                return (
                    <p
                        onClick={e => deleteProduct(e, product.id)}
                        key={product.id}
                    >
                        {product.name}
                    </p>
                );
            })}
        </div>
    );
};

export default ProductView;
