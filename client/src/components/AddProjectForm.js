import React, { useState } from "react";

const AddProjectForm = ({setProducts, products}) => {
    const [name, setName] = useState("");

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
            });
    };

    return (
        <div>
            <input
                type="text"
                value={name}
                placeholder="Enter a name"
                onChange={e => setName(e.target.value)}
            />
            <button onClick={addProject}>Submit</button>
        </div>
    );
};

export default AddProjectForm;
