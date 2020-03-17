//import React, { Component } from "react";
import React from 'react'
import { Link } from "react-router-dom";

const PostItem = ({ id, title, category, delPost, getPostDetails, editPost }) => {

  return (
    <div>
      <div className='card_content-category'>
        <div>
        <Link to={`/post/${id}`}>
            <button className='btnStyle'
              value={id}
            > C
              {" "}
            </button>
          </Link>
        </div>
        <div className='card_content-category-text'>
           {category}
        </div>
      </div>
      <div className='card_content'>
        <Link style={{ color: 'indigo', fontSize: '30px' }} to={`/post/${id}`} className='card_content-item'> {title}</Link>
        <div className='card_content-item'>
          <Link to={`/post/${id}`}>
            <button className='btns'
              value={id}
            >
              {" "}
             View{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PostItem


