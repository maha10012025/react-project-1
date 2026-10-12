import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Product() {

    const [id, setId] = useState('')
    const [searched, setSearched] = useState(false)
    const [product, setProduct] = useState(null)
    const handleIdChange = (event) => {
        setId(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        setSearched(true)
        axios.get(`http://localhost:3000/products/${id}`).then(respose => {
            setProduct(respose.data)
        }).catch(error => {
            setProduct(null)
        })

    }


    return (
        <>
            <form className="form-group" onSubmit={handleSubmit}>
                <div>
                    <label className="form-label">Search Product</label>
                    <input value={id} onChange={handleIdChange} className="form-control" />
                    <button className="btn btn-info mt-2">Search</button>
                </div>
            </form>
            {
                product && (
                    <table className='table table-bordered table-striped mt-2'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Category</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.category}</td>
                            </tr>
                        </tbody>
                    </table>
                )
            }
            {
                (searched && !product) && <h4 className='mt-2'>Product Not Found</h4>
            }
        </>
    )


}

export default Product