import React from "react";

function Search() {
    return (
        <div className="searchbar">
            <label htmlFor="search">Search Dessert</label>
            <input
                type='text'
                id='search'
                placeholder="Dessert"
            />
        </div>
    )
}

export default Search