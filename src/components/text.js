import React from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";

const editPost2 = ({ articles, id, delPost, getPostDetails})  => {

    const PostFiltered = articles.filter(post => post.id === id);

    const { title, category, content } = PostFiltered[0]

  const onChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

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
                                            <button className='btn'
                                                onClick={this.onSubmit}>
                                                Save Post
                                        </button>
                                        </div>
                                        <div>
                                            <Link to='/Post'>
                                                <button className='btn'>
                                                    Cancel
                                                </button>
                                            </Link>
                                        </div>
                                        <button className='btn'
                               onClick={() => getPostDetails(id)}
                                >
                                    {" "}
                                    Edit{" "}
                                    </button>
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
                        </div>
                    </form>
                </div>
            </div>
    )
}

export default withRouter (editPost2)
//=6666666666666666666666666666666666666666666666666666666666666666
/*  <Route
                exact
                path={`/post/:id`}
                render={(props) => {
                return <ViewPost articles={this.state.articles} {...this.props} id={props.match.params.id} delPost={this.delPost}
                  getPostDetails={this.getPostDetails} />
              }
              }
              /> */

                   
          /*    <Route
                exact
                path={`/post/:id`}
                render={(props) => <EditPost2 {...this.props} articles={this.state.articles} {...this.state} id={props.match.params.id} delPost={this.delPost} addNewPost={this.addNewPost}  getPostDetails={this.getPostDetails} onChange ={this.onChange} Redirect to="/Post" />}
              />*/


  /*import React, { Component } from "react";
import React from 'react'
import { Link } from "react-router-dom";

const PostItem = ({ id, title, category, delPost, getPostDetails, editPost }) => {

  return (
    <div>
      <div className='card_content'>
        <Link style={{ color: 'indigo', fontSize: '30px' }} to={`/post/${id}`} className='card_content-item'>{title}</Link>
        <div className='card_content-item'>Category: {category}</div>
        <div className='card_content-item'>
          <button className='btns'
            value={id}
            onClick={() => delPost(id)}
          >
            {" "}
             Delete{" "}
          </button>
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
*/

        