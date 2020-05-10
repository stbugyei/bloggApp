//import React, { Component } from "react";
import React from 'react'
import { Link } from "react-router-dom";

const PostItem = ({ id, title, category}) => {
 

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
        <div className='btn-title_wrapper'>
        <Link to={`/post/${id}`}>
            <button style={btnTitle}
              value={id}
            > T
              {" "}
            </button>
          </Link>
          <Link style={{ color: 'indigo', fontSize: '25px' }}
          to={`/post/${id}`} className='card_content-item'>
          {title}
        </Link>
        </div>
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


const btnTitle = {
  border:'1px solid',
  fontSize:' 15px',
  fontWeight: 'bold',
  margin: '19px -3px 0px 15px',
  background:'white',
  color: 'red',
  borderRadius:'50%',
  padding: '6px 10px',
  cursor: 'pointer',
  boxShadow: '0 3px 6px rgba(0, 0, 0, .16), 0 1px 2px rgba(0, 0, 0, .23)'
}