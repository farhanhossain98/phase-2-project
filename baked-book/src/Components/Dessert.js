import React from "react";

function Dessert() {
    return (
        <li>
            <img src={image} alt={name} />
            <h4>{/* name of dessert */}</h4>
            <p>Ingredients</p>
            <p>Instructions</p>
            <button><img src={image} alt={name} /></button>
        </li>
    )
}

export default Dessert 