//import React, { App } from "react";
import React from 'react'
import PostItem from "./PostItem";
//import PropTypes from "prop-types";

const Post = ({ id, articles, delPost, editPost}) => {

    return (
        <div>
            {articles.map((post)=> (
                <div key={post.id} className='head'>
                    <div className='container'>
                        <div className="post">
                            <PostItem
                                id={post.id}
                                title={post.title}
                                category={post.category}
                                delPost={delPost}
                                editPost={editPost}
                            />                          
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Post
// <Link to={`/post/${id}`}>{title}</Link>