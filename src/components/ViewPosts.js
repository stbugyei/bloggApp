import React from "react";
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";

const ViewPost = ({ articles, id, delPost}) => {

    const PostFiltered = articles.filter(post => post.id === id);

    const { title, category, content } = PostFiltered[0]

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
                    <Link to={`/post/edit/:id`}>
                                <button className='btn'
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

