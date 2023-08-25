import React, { useState } from 'react'
import "./cart.css"
import { GrFormAdd, GrFormSubtract} from "react-icons/gr";
import Annoucement from '../../component/Annocement/Annoucement'
import Navbar from '../../component/Navbar/Navbar'
import NewsLetter from '../../component/NewsLatter/NewsLetter'
import Footer from '../../component/Footer/Footer'
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
const KEY = process.env.REACT_APP_STRIPE;
const Cart = () => {
  
console.log(KEY,"keyCurrent")
  const [stripeToken,setstripeToken]= useState(null)



const cart = useSelector(state=>state.cart)

const onToken = (token)=>{
  console.log(token,"token")
setstripeToken(token)
}

console.log(stripeToken,"set")

  return (
    <div>
      <Annoucement/>
      <Navbar/>

<div className="Cart_Cont">
<h1 className='Cart_title'>YOUR BAGS</h1>
<div className="topContainor">
<div><button className='continous'> CONTINOUS SHOPING  </button></div>
<div><span>Shoping Bag(2)</span> <span>Your Whishlist (0)</span></div>
<div><button className='btn'>CHECKOUT NOW</button></div>
</div>
<div className="bottom_Containor">

<div className="info ">


  {

cart.products.map((product , indx)=>{
  return  <div className="product" key={indx}>
    <div className="productDetail">
    <img src={product.img} alt="" width="200px" height="150px" />
    <div className="Detail">
    <span style={{margin:"10px 0px"}}> <b>Product Name:</b> {product.title}</span>
    <span style={{margin:"10px 0px"}}> <b>Product Id:</b> {product._id}</span>
    <div className='prodColor' style={{backgroundColor:product.Color}}></div>
    <span style={{margin:"10px 0px"}}> <b>Product Size:</b>{product.Size}</span>
    
    </div>
    
    </div>
    <div className="PriceDetail">
        <div className='price'><GrFormAdd className='qtyprice'/> <span className='qtyprice'>{product.qty}</span> <GrFormSubtract className='qtyprice'/> </div>
    
     <div className="PriceAmt">${product.price}</div>
    </div>
    
    
    </div>
})
  }

<hr />
</div>
<div className="summery">
    <h1 className='title'> Order Summery</h1>
    <div className="summeryDetail">
    <div className="summerytext">
<span style={{margin:"10px 0px"}}>Subtotal : </span>
<span style={{margin:"10px 0px"}}>Estimated Shpping : </span>
<span style={{margin:"10px 0px"}}>Shipping Discount : </span>
<h3 style={{margin:"10px 0px"}}>Total :</h3>  </div>
   
    <div className="summeryItem">
    <span style={{margin:"10px 0px"}}> {cart.total}</span>
<span style={{margin:"10px 0px"}}>123 </span>
<span style={{margin:"10px 0px"}}>10%</span>
<h3 style={{margin:"10px 0px"}}>$ {cart.total}</h3></div>
  
    </div>

    <StripeCheckout
              name="Lama Shop"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
               <button className='checkoutnow'>Checkout Now</button>
            </StripeCheckout>
   
  
           
          
 
   </div>
  
</div>
</div>

      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Cart
