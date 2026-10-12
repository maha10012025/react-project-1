import axios from "axios"
import { useState } from "react"
import Product from "./Product"

function Home() {

    return (
        <>
            <h3>Home Page</h3>
            <Product />
        </>
    )
}

export default Home