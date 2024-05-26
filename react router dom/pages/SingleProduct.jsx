import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
    const params=useParams()
    // console.log(params)
    const[product,setProduct]=useState({})
    useEffect(()=>{
        fetch(`http://localhost:9090/products/${params.productId}`)
        .then((response)=>response.json())
        .then((productobject)=>setProduct(productobject))
    },[])
  return (
    <div>
     <h2>{product.name}</h2>
     <h4>{product.price}</h4>
    </div>
  )
}

export default SingleProduct