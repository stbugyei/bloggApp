import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";


export class EditPost extends Component {
      state = {
        title: "",
        category: "",
        content: ""
    };

    static contextTypes = {
        router: PropTypes.object
    }

    //========= An onSubmit event for submitting the state(articles)=========
    onSubmit = e => {
        e.preventDefault();
        this.props.addNewPost(
            this.state.title,
            this.state.category,
            this.state.content
        );
        this.setState({ [e.target.title]: "", [e.target.category]: "", [e.target.content]: "" })
        this.props.history.push('/Post');
    };

    //========= An onChange event for populating the state(articles)=========

    onChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }


    render() {

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
                                            value={this.state.title}
                                            onChange={this.onChange}
                                        >
                                        </input>
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            id="category"
                                            name='category'
                                            placeholder=" Edit Category"
                                            value={this.state.category}
                                            onChange={this.onChange}
                                        >
                                        </input>
                                    </div>
                                    <div>
                                        <textarea id="content"
                                            name='content'
                                            placeholder="Edit Content"
                                            value={this.state.content}
                                            onChange={this.onChange} cols="50" rows="10"></textarea>
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
                                    </div>

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

//=========== creating propTypes ===========
EditPost.propTypes = {
    EditPost: PropTypes.func
};


export default withRouter(EditPost);
