import React, { useEffect, useState } from "react";
import Product from "../product/Product";
import { popularProducts } from "../../data";
import "./products.css";
const Products = ({Sort, filter, category}) => {
  const [product, setproduct] = useState([])
  const [filterProduct,setfilterProduct] = useState([])





useEffect(()=>{




  const  getproduct = async()=>{
try {
  const res = await fetch(category?`https://ecom-backend-apis.onrender.com/api/products/?category/${category}`:"https://ecom-backend-apis.onrender.com/api/products/") 
  console.log(res,"ressdata")
 
  if(!res.status==="ok"){
    throw new Error("Request failed with status" + Response.status)
  }
  const data = await res.json()
  setproduct(data)

} catch (error) {
 console.log(error) 
}
  }
  getproduct()
},[category])

useEffect(()=>{
  category && setfilterProduct(
    product.filter(item=>Object.entries(filter).every(([key,value])=>
    item[key].includes(value)
    ))
  )
  },[category, filter, product])

useEffect(()=>{
  if(Sort==="newest"){
    setfilterProduct(prev=>{ const test = [...prev].sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt)) 
    return test })
  
 }
 else if(Sort==="asc"){
  setfilterProduct((prev)=>
  [...prev.sort((a,b)=>a.price-b.price)])
 }
 else{
  setfilterProduct((prev)=>
  [...prev.sort((a,b)=>b.price-a.price)])
 }
},[Sort])


  return (
    <div className="products_cont">
     {

category ? filterProduct.map((item, id)=><Product item={item} key={id}/>)
:product.slice(0,8).map((item , id)=><Product item={item} key={id}/>)
 
     }
    </div>
  );
};

export default Products;
