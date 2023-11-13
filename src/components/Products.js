import React from "react";
import {Link} from 'react-router-dom'
import "./Products.css";
import Product from "./ProductItems";



const Products = () => {
  return (
    <>
    <div className="products_row">
<Product

id="1"
title="Apple iPad (9th Generation): with A13 Bionic chip, 10.2-inch Retina Display, 64GB, Wi-Fi, 12MP front/8MP Back Camera, Touch ID, All-Day Battery Life "
image="https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_UL320_.jpg" alt=""
rating={4}
price={59.99}

/>
<Product
id="2"
title="Apple 20W USB-C Power Adapter - iPhone Charger with Fast Charging Capability, Type C Wall Charger "
image="https://m.media-amazon.com/images/I/41iWogJnZQL._AC_UL320_.jpg" alt=""
rating={5}
price={89.99}

/> 

   </div>
   <div className="products_row">
<Product
id="1"
title="INIU Portable Charger, Slimmest 10000mAh 5V/3A Power Bank, USB C in&out High-Speed Charging Battery Pack, External Phone Powerbank"
image="https://m.media-amazon.com/images/I/51AOZq9HhEL._AC_UL320_.jpg" alt=""
rating={5}
price={60.99}

/>
<Product
id="2"
title="Roku Express 4K+ | Roku Streaming Device 4K/HDR, Roku Voice Remote, Free & Live TV"
image="https://m.media-amazon.com/images/I/71EZAE6fljL._AC_UL320_.jpg" alt=""
rating={3}
price={28.99}

/> 
<Product
id="2"
title="Apple AirPods Pro (2nd Gen) Wireless Earbuds, Up to 2X More Active Noise Cancelling, Adaptive Transparency, Personalized Spatial Audio MagSafe"
image="https://m.media-amazon.com/images/I/61f1YfTkTDL._AC_UL320_.jpg" alt=""
rating={10}
price={59.99}

/> 

   </div>
   </>
    
     
  );
};

export default Products;
