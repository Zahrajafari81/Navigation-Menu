import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom';

const Products = () => {

    const[products,setProducts]=useState([])
    // useEffect(() => {
    //     fetch("http://localhost:9090/products")
    //     .then((response)=>response.json())
    //     .then((productArrey)=>setProducts(productArrey))
    // }, []);
//     if (products.length === 0)
//     return(
// <h1>Loading....</h1>)
// else
 const data=useLoaderData()

  return (
<>
{
   data.map((item)=>
    {
        return <div>
        <Link to={`/products/${item.id}`}>{item.name}</Link>
        </div>
    })
}




</>
)
}

export default Products