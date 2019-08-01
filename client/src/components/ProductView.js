import React, { useEffect } from "react";

const ProductView = ({ products, setProducts }) => {
    const deleteProduct = (e, id) => {
        console.log("clicked", id);
        fetch(`http://localhost:5000/product/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                const valueToRemove = id;
                const filteredItems = products.filter(function(item) {
                    return item.id !== valueToRemove;
                });
                setProducts(filteredItems)
            });
    };

    return (
        <div>
            <h1>Products</h1>
            {products.map((product, index) => {
                return (
                    <p onClick={e => deleteProduct(e, product.id)} key={index}>
                        {product.name}
                    </p>
                );
            })}
        </div>
    );
};

export default ProductView;
