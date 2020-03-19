import React from "react";
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";

const ViewPost = ({ articles, id, delPost, editPost, getPostDetails }) => {

    const PostFiltered = articles.find(post => post.id === id);

    const { title, category, content } = PostFiltered

    return (
        <div className='container'>
            <div className="singlepost">
                <div className="singlepost-content">
                    <div className="post-title">Title: {title}</div>
                    <div className="post-catagory">Category: {category}</div>
                    <div className="post-text"><p>{content}</p></div>
                </div>
                <div className='button-post'>
                    <Link to='/Post'>
                        <button className="btn">
                            Back to posts
                        </button>
                    </Link>
                    <Link to={`/post/edit/${id}`}>
                        <button className='btn'
                         value={id}
                            onClick={(id) => editPost(id)}
                        >
                            {" "}
                        Edit{" "}
                        </button>
                    </Link>
                    <Link to='/Post'>
                        <button className='btn'
                            onClick={() => delPost(id)}
                        >
                        {" "}
                        Delete{" "}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default withRouter(ViewPost);

