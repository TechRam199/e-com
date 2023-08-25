import React from 'react'
import  "./newsletter.css"
import SendIcon from '@mui/icons-material/Send';
import {  AiOutlineCaretRight} from "react-icons/ai";



const NewsLetter = () => {
  return (
    <div className='News_cont'>
 <div className="newsItem">
    <h1 className='news-title content'>NewsLetter</h1>
    <span className=' news-desc content'>Get timely updates from your favorite update</span>
    <div className='NewsInput content'> <input type="text" className='sendInput' placeholder='ENTER YOUR EMAIL'></input><button className='sendIcon'><SendIcon /></button></div>

 </div>
    </div>
  )
}

export default NewsLetter
