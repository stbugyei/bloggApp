//import React, { App } from "react";
import React from 'react'
import { Link } from "react-router-dom";
import PostItem from "./PostItem";
//import PropTypes from "prop-types";

const Post = ({ id, articles, delPost }) => {

    return (
        <div>
            {articles.map(post => (
                <div key={post.id} className='head'>
                    <div className='container'>
                        <div className="post">
                            <PostItem
                                id={post.id}
                                title={post.title}
                                category={post.category}
                            />
                            <div className='card_content-item'>
                                <button className='btnStyle'
                                    value={post.id}
                                    onClick={() => delPost(post.id)}
                                >
                                    {" "}
                                    Delete{" "}
                                </button>
                                <Link to={`/post/edit/:id`}>
                                <button className='btnStyle'
                                    value={post.id}
                                >
                                    {" "}
                                    Edit{" "}
                                </button>
                            </Link>
                            </div>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    )
}

export default Post
// <Link to={`/post/${id}`}>{title}</Link>