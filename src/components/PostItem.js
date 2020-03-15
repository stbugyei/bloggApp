//import React, { Component } from "react";
import React from 'react'
import { Link } from "react-router-dom";

const PostItem = ({ id, title, category }) => {
 
  return (
    <div>
        <div className='card_content'>
        <Link style={{color:'indigo', fontSize:'30px'}} to={`/post/${id}`}className='card_content-item'>{title}</Link>
       <div className='card_content-item'>Category: {category}</div>
      </div>
    </div>
  )
}

export default PostItem


