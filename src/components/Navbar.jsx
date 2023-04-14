import React from 'react';
import "./styles.css";


function Navbar() {
  return (
    <div className='navbar'>
      <span className="logo">
      Lama Chat 
      </span>
      <div className="user">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBV_KaPjLgij4Z6tnGcMMHyP58HVnjfEDDftJ4KfYM&s" alt="" />
         <span>johan</span>
         <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
