import React from "react";
import {Link} from 'react-router-dom'
import "./Products.css";

const NewA = () => {
  return (
    <div className='product'>
    <div classname='product_info'>
   
     <img src="https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_UL320_.jpg" alt="" />
     <p>Apple iPad (9th Generation): with A13 Bionic chip, 10.2-inch Retina Display, 64GB, Wi-Fi, 12MP front/8MP Back Camera, Touch ID, All-Day Battery Life –</p>
     <div className='product_rating'>
   <p>4</p>
   </div>
   <div className='product_price'>
     "$134."
   </div>
     </div>
   
       </div>
  )
}

export default NewA
