import React from 'react'
import "./NotFound.css";
import {Link} from 'react-router-dom'


const NotFound = () => {
  return (
    <div className="not_found">

       <Link to ="/">
       <div>
            <img src='https://images-na.ssl-images-amazon.com/images/G/01/error/title._TTD_.png'/>
        </div>
      <div>
        <img src='https://images-na.ssl-images-amazon.com/images/G/01/error/56._TTD_.jpg'/>
      </div>
       </Link>
    </div>
  )
}

export default NotFound
