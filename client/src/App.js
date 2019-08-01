import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import axios from "axios";
import ProductsView from "./components/ProductView";
import AddProjectForm from "./components/AddProjectForm";

const App = () => {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState("");

    const fetchProducts = async () => {
        const response = await axios.get(`http://localhost:5000/products`);
        console.log(response.data.data);
        setProducts(response.data.data);
        return
    };

    useEffect(() => {
        fetchProducts();
    }, [name]);

    const headers = {
        "Content-Type": "application/json",
        "Access-Control-Origin": "*"
    };

    const data = {
        name: name
    };

    const addProject = () => {
        fetch("http://localhost:5000/product", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(data)
        })
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log(data);
                setName("");
                setProducts(products);
            });
    };

    // console.log(products)
    if (!products) {
        return <p>Loading...</p>;
    }
    return (
        <div className="App">
            <header className="App-header">
                <AddProjectForm
                    addProject={addProject}
                    name={name}
                    setName={setName}
                    products={products}
                    setProducts={setProducts}
                />
                <ProductsView products={products} setProducts={setProducts} />
            </header>
        </div>
    );
};

export default App;
