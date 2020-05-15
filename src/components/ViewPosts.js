import React from "react";
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";

const ViewPost = ({ articles, id, delPost }) => {

    const detailPost = articles.find(post => post.id === id);
    const { title, image, category, date, content } = detailPost
    /*title, image, category, sypnosis, date  */

    const singlepost_img = {
        textAlign: 'center',
        width: '100%'
    }


    return (
       <div className="singlepost"> 
        {/* <div className="post"> */}
            <div className="singlepost_img" style={singlepost_img}>
                <img
                    style={{ width: '100%' }}
                    src={image}
                    alt=" "
                />
            </div>

            <div className="singlepost-content">
                <div className="post-title">Title: {title}</div>
                <div className="post-catagory">Category: {category}</div>
                <div className="post-catagory">{date}</div>
                <div className="post-text"><p>{content}</p></div>
            </div>

            <div className='button-post'>
                <Link to='/'>
                    <button className="btn">
                        Back to posts
                        </button>
                </Link>
                <Link to={`/post/edit/${id}`}>
                    <button className='btn'
                    >
                        {" "}
                        Edit{" "}
                    </button>
                </Link>
                <Link to='/'>
                    <button className='btn'
                        onClick={() => delPost(id)}
                    >
                        {" "}
                        Delete{" "}
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default withRouter(ViewPost);

