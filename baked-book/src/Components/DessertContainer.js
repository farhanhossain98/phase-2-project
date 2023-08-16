import React from "react";
import AddDessertForm from "./AddDessertForm"
import DessertList from "./DessertList"
import Search from "./Search";

function DessertContainer() {
    return (
        <main>
            <Search />
            <AddDessertForm />
            <DessertList />

        </main>
    )
}

export default DessertContainer