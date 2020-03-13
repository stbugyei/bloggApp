import React, { Component } from "react";
import PostItem from "./PostItem";
//import PropTypes from "prop-types";

class Post extends Component {
    render() {
        return this.props.articles.map(post => (
            <div key={post.id} className='head'>
            <div className='container'>
                <div className="post">
                        <PostItem                         
                        post={post}
                        delPost={this.props.delPost}
                        />
                </div>
            </div>
            </div>
        ));
    }
}


export default Post;
