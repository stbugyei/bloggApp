import React from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";

const EditPost = ({articles, id, title, category, content, delPost, getPostDetails, editPost, onChange  }) => {
   
 
  //  const singlepost = articles.find(post => post.id === id);

   // const { title, category, content } = singlepost
  
   /* const onChange = e => {
           const { name, value } = e.target
           this.setState({ [name]: value })
       }*/
      // console.log(articles[0].id)
    return (
        <div className="head">
        <div className="container">
            <form>
                <div className="form_content">
                    <div className="fieldset_content">
                        <h1>Edit Post</h1>
                        <div className="Search_Submit">
                            <div>
                                <input
                                    type="text"
                                    id="title"
                                    name='title'
                                    placeholder="Edit Title"
                                    value={title}
                                    onChange={onChange}
                                >
                                </input>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    id="category"
                                    name='category'
                                    placeholder=" Edit category"
                                    value={category}
                                    onChange={onChange}
                                >
                                </input>
                            </div>
                            <div>
                                <textarea
                                    id="content"
                                    name='content'
                                    placeholder="Edit Content"
                                    value={content}
                                    onChange={onChange} cols="50" rows="10">
                                </textarea>
                            </div>
                            <div className='buttons'>
                                <div>
                                    <Link to='/'>
                                        <button className='btn'>
                                            Cancel
                                        </button>
                                    </Link>
                                </div>
{/* 
                                <div>
                                    <Link to='/Post'>
                                        <button className='btn'
                                            onClick={this.onSubmit}>

                                            {" "}
                    save{" "}
                                        </button>
                                    </Link>
                                </div> */}
                            </div>

                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    )
}

export default withRouter(EditPost)
/*  <div>
                                            <button className='btn'
                                                onClick={this.onSubmit}>
                                                Save Post
                                        </button>
                                        </div> */

/*     <button className='btn'
value={id}
onClick={() => getPostDetails(id)}
>
{" "}
Edit{" "}
</button> */