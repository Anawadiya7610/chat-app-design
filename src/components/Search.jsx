import React from 'react'
import "./styles.css";

function Search() {
  return (
    <div className='search'>
      <div className="searchForm">
      <input type="text"  placeholder='find user'/>
      </div>
      <div className="userChat">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBV_KaPjLgij4Z6tnGcMMHyP58HVnjfEDDftJ4KfYM&s" alt="" />
         <div className="userChatInfo">
         <span>naak</span>
         </div>
      </div>
    </div>
  )
}

export default Search
