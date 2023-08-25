import React from 'react' 
import Cate from '../Category/Cate'
import { categories } from '../../data'
import "./categories.css"

const Categories = () => {
  return (
    <div className='categories_Cont'>
      {

categories.map((item, id)=>{
    return <Cate item={item} key={id}/>
    })

      }
    </div>
  )
}

export default Categories
