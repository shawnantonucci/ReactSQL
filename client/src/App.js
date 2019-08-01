import React, { useState, useEffect } from "react";
import "./App.css";
import ProductsView from "./components/ProductView";
import AddProjectForm from './components/AddProjectForm'

const App = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(response => response.json())
            .then(data => {
                // Here's a list of repos!
                const tempData = data.data;
                console.log(tempData, "from data");
                setProducts(tempData)
            });
    }, []);

    // console.log(products)
    if (!products) {
        return <p>Loading...</p>;
    }
    return (
        <div className="App">
            <header className="App-header">
                <AddProjectForm setProducts={setProducts} products={products} />
                <ProductsView products={products} />
            </header>
        </div>
    );
};

export default App;
