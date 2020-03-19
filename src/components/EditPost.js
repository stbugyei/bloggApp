import React from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";

const EditPost = ({ articles, id, delPost, getPostDetails, editPost, onChange  }) => {
   
 
    const PostFiltered = articles.find(post => post.id === id);

    const { title, category, content } = PostFiltered
  
   /* const onChange = e => {
           const { name, value } = e.target
           this.setState({ [name]: value })
       }*/
     
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
                                        placeholder=" Edit Category"
                                        value={category}
                                        onChange={onChange}
                                    >
                                    </input>
                                </div>
                                <div>
                                    <textarea id="content"
                                        name='content'
                                        placeholder="Edit Content"
                                        value={content}
                                        onChange={onChange} cols="50" rows="10"></textarea>
                                </div>
                                <div className='buttons'>
                                    <div>
                                        <Link to='/Post'>
                                            <button className='btn'>
                                                Cancel
                                                </button>
                                        </Link>
                                    </div>
                                    <div>  <Link to='/Post'>
                                        <button className='btn'
                                            onClick={() => delPost(id)}
                                        >
                                            {" "}
                            Delete{" "}
                                        </button>
                                    </Link>
                                    </div>
                                    <div>
                                        <Link to='/Post'>
                                            <button className='btn'
                                               

                                            >
                                                {" "}
                            save{" "}
                                            </button>
                                        </Link>
                                    </div>
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