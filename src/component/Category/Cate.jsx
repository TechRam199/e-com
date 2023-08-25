import React from 'react'
import "./cate.css"
import { categories } from '../../data'
import { Link } from 'react-router-dom'
const Cate = ({item}) => {



  return (
    <div className='cat-containor'>


     <div className='cat-info'>
    <img src={item.img} alt={item.title} className='imgcat' />
   <div className="information">
    <h2 className='cat-title'>{item.title}</h2> 
   <Link to={`/Products/${item.cat}`}>
    <button className='cat-btn'>SHOP NOW</button>
    </Link>
    </div>
    </div>

    </div>
  )
}

export default Cate
