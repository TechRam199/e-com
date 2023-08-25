import React, { useState } from 'react'
import Annoucement from '../../component/Annocement/Annoucement'
import Navbar from '../../component/Navbar/Navbar'
import Products from "../../component/Products/Products"
import NewsLetter from "../../component/NewsLatter/NewsLetter"
import Footer from "../../component/Footer/Footer"
import "./productlist.css"
import { useLocation } from 'react-router-dom'


const ProductList = () => {
const location  = useLocation()
const category  = location.pathname.split("/")[2];

const [Sort , setSort] = useState("")
const [filter , setfilter] = useState({})


const Filterhandle = (e)=>{
const value = e.target.value
setfilter({...filter,[e.target.name]:value})
console.log(filter,"filter")

}
console.log(Sort , "Sort")

  return (
    <div>
      <Annoucement/>
      <Navbar/>
<div className="ProdList_Containor">
<h4 className='prod_cat'>{category}</h4>
<div className="filter">
    <div className="filter1">
<span>Filter Product :</span>
<select className='Prod_select' name='color'  onChange={Filterhandle}> 
<option disabled> Color </option>
<option> white </option>
<option> black </option>
<option> red </option>
<option> blue </option>
<option> green </option>

</select>
<select  name='size'  className='Prod_select' onChange={Filterhandle}> 
<option disabled>Size</option>
<option>XS</option>
<option> S </option>
<option> M </option>
<option> L </option>
<option> XLL </option>
</select>

    </div>
    <div className="filter2">
<span>Proudct Short : </span>

<select className='Prod_select' name="Newest" id="Short" onChange={(e)=>setSort(e.target.value)}>
<option value="newest">Newest</option>
<option value="asc">Price asc</option>
<option value="desc">Price Desc</option>

</select>

    </div>
</div>
</div>

      <Products Sort={Sort} filter={filter} category={category}/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default ProductList
