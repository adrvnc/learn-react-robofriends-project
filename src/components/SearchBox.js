import React from "react";

const SearchBox = ({ searchChange }) => {
    return (
        <div className="pa2">
            <input 
            className="pa3 ba b--black bg-white br-pill"
            type='search' 
            placeholder='Search Robots...' 
            onChange={searchChange}
            style={{
                width: "100%",
                maxWidth: "300px" // Set a maximum width if desired
            }}
            />
        </div>
    );
}

export default SearchBox; 