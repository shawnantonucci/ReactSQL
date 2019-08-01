import React from "react";

const AddProjectForm = ({ addProject, setName, name }) => {
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
