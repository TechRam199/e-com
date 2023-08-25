import React from 'react'
import Annoucement from '../component/Annocement/Annoucement'
import Navbar from '../component/Navbar/Navbar'
import Slider from '../component/Slider/Slider'
import Cate from '../component/Category/Cate'
import Product from '../component/product/Product'
import NewsLetter from '../component/NewsLatter/NewsLetter'
import Footer from '../component/Footer/Footer'
import Categories from '../component/Categories/Categories'
import Products from '../component/Products/Products'

const Home = () => {
  return (
    <div>
      <Annoucement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <NewsLetter/>
      <Footer/>
      
      
    </div>
  )
}

export default Home
