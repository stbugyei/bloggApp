//import React, { App } from "react";
import React from 'react'
import PostItem from "./PostItem";
//import PropTypes from "prop-types";

const Post = ({ id, articles, delPost, editPost}) => {

    return (
        <div className='post_wrapper'>
            {articles.map((post) => (
                    <div  key={post.id} className="post">
                        <PostItem
                            id={post.id}
                            image={post.image}
                            category={post.category}
                            title={post.title}
                            date={post.date}
                            sypnosis={post.sypnosis}
                            delPost={delPost}
                            editPost={editPost}
                        />
                    </div>
            ))}
        </div>
    )
}

export default Post
// <Link to={`/post/${id}`}>{title}</Link>