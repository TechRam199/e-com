import React from 'react'

import { MdCall ,MdEmail, MdLocationOn} from "react-icons/md";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';

import "./footer.css"
const Footer = () => {
  return (
    <div className='footer_Cont'>


    <div className="footer_left"> 
    <h2 className='footer-Title'> .LAMA</h2>
<div className="footerDesc"><span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</span>
</div>
<div className="footer_icon_Cont">
  <div className="socialIcon  facebook"><FacebookIcon/></div>
  <div className="socialIcon instagram"><InstagramIcon/></div>
  <div className="socialIcon twitter"><TwitterIcon/></div>
  <div className="socialIcon pinterest"><PinterestIcon/></div>

</div>
    </div>
    <div className="footer_center"> 
    <h2 className='footer-Title'> Useful Links</h2>
    <div className="footer_center_cont">
<ul>

<li>Home</li>
<li>Man Fashion</li>
<li>Woman Fashion</li>
<li>Accessories</li>
<li>My Account</li>
<li>Order Tracking</li>
<li>WhisList</li>
<li>WhisList</li>
<li>Cart</li>
<li>Terms</li>

</ul>

    </div>
    
    </div>
    <div className="footer_Right"> 
    <h2 className='footer-Title'>Contact- Us</h2>

    <div className='footer_Icon_Item'> <MdLocationOn className="footer_right_Icon"/>  622 Dixe Path Soudth Delhi  </div>
    <div  className='footer_Icon_Item' > <MdCall className="footer_right_Icon"/> +91 2323 453 232  </div>
    <div  className='footer_Icon_Item'  > <MdEmail className="footer_right_Icon"/>  pdc@gmail.com  </div>
<img  className='payment' src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
    
    </div>
    </div>
  )
}

export default Footer
