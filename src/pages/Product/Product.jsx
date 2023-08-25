import React, { useEffect, useState } from 'react'
import Annoucement from '../../component/Annocement/Annoucement'
import Navbar from '../../component/Navbar/Navbar'
import NewsLetter from '../../component/NewsLatter/NewsLetter'
import Footer from '../../component/Footer/Footer'
import "./product.css"
import { GrFormSubtract , GrFormAdd } from "react-icons/gr";
import { publicRequest } from '../../RequestMethod'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../Redux/Cart'
import axios from 'axios'



const Product = () => {

  const dispatch = useDispatch()

const[qty , setqty] = useState(1)
const [Color, SetColor] = useState("")
const [ Size , setSize]  = useState("")
const [product, setProduct] = useState({})

const location = useLocation()
const id = location.pathname.split("/")[2];



useEffect(()=>{
  const getproduct = async ()=>{
try {
  const res  = await axios.get(`https://ecom-backend-apis.onrender.com/api/products/find/${id}`)
const data = res.data
setProduct(data)
} catch (error) {
  
}
  }
  getproduct()
},[id])



const handleqty = (type)=>{
  if(type==="inc"){
    setqty(qty+1)
  }
  else if(type==="dec"){
    qty>1 && setqty(qty-1)
  }
}



const handleClick = ()=>{
  //update a cart
  dispatch(
    addProduct({...product,Size,Color,qty})
    );
     }
const handleChange = (e)=>{
const newSize = e.target.value;
setSize(newSize)
}

console.log(qty,"qtty")
  return (
    <div>
<Annoucement/>
<Navbar/>
<div className="product_Cont">
<div className="prod_image_containor"> <img src={product.img}alt="" width="400px" height="400px" /> </div>
<div className="prod_info_cont">
<h2 className='Prod_title'>{product.title}</h2>
<p className='Prod_Desc'> {product.desc}</p>
<span className='Prod_Amount' >$ {product.price} </span>
<div className="filter_containor">
<div className='color_filter'>
  <span>Color : </span> 
 {
product.color ?.map((c)=>(
<div className="Prod_color" key={c} style={{backgroundColor:c}} onClick={()=>SetColor(c)}></div> 
))

 }
  
  </div>
<div className="size_filter">
  <span>Size :</span>
  

 <select value="Size" onChange={handleChange}>
{
  product.size?.map((s)=>(
    <option  key={s}>{s}</option>
  ))
}  


 
</select>
 
  </div>
  </div>
  <div className="AmountContainor">
    <div className="addamount">
<GrFormSubtract className='Icon' onClick={()=>handleqty("dec")}/> <div className='qty'>{qty}</div> < GrFormAdd className='Icon'onClick={()=>handleqty("inc")}/>
</div>

<button onClick={handleClick}>Add to Cart</button>

  </div>
</div>
</div>

<NewsLetter/>
<Footer/>
    </div>
  )
}

export default Product
