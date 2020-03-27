import React, { Component } from "react";
//import articles from "./articles";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import uuid from "uuid";



export class EditPost extends Component {
    constructor(props) {
        super(props);
        //  const { title, category, content } = this.props.articles[0]
        this.state = {
            //  articles: '',
            id: uuid.v4(),
            title: '',
            category: '',
            content: '',
            //    ...this.props.articles[0],
            ...this.props.articles[this.props.match.params.id]
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    /*  componentDidMount() {
          const articles = loadArticles();
          this.setState({articles})
        }*/
    /*  constructor(props) {
          super(props)
          const { articles } = props
          console.log(articles)
      }*/


    static contextTypes = {
        router: PropTypes.object
    }
    //========= An onSubmit event for submitting the state(articles)=========
    onSubmit = e => {
        e.preventDefault();
        const PostFiltered = {
            id: this.state.id,
            title: this.state.title,
            category: this.state.category,
            content: this.state.content
        }


        // this.props.getPostDetails(PostFiltered);
        const id = (this.props.match.params.id);
        this.props.editPost(id, PostFiltered);
        /**/
        this.props.history.push('/Post');

    };

    //========= An onChange event for populating the state(articles)=========

    onChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }


    render() {
        //  console.log(this.props.article)
        //zconsole.log(this.state)
        // console.log(this.props.articles[0])
        // const { title, category, content } = this.props.articles[0]
        // console.log(this.props.editPost)
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
                                            placeholder=" Edit category"
                                            value={this.state.category}
                                            onChange={this.onChange}
                                        >
                                        </input>
                                    </div>
                                    <div>
                                        <textarea
                                            id="content"
                                            name='content'
                                            placeholder="Edit Content"
                                            value={this.state.content}
                                            onChange={this.onChange} cols="50" rows="10">
                                        </textarea>
                                    </div>
                                    <div className='buttons'>
                                        <div>
                                            <Link to='/Post'>
                                                <button className='btn'>
                                                    Cancel
                                                </button>
                                            </Link>
                                        </div>

                                        <div>
                                            <Link to='/Post'>
                                                <button className='btn'
                                                    onClick={this.onSubmit}>

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
        );
    }
}

//=========== creating propTypes ===========
/*EditPost.propTypes = {
    EditPost: PropTypes.func
};
*/

export default withRouter(EditPost);
/* onSubmit = e => {
        e.preventDefault();
        const PostFiltered = {
            id: this.props.id,
            title: this.props.title,
            category: this.props.category,
            content: this.props.content
        }

        const id = (this.props.match.params.id);
        this.props.editPost(id, PostFiltered);
        this.props.history.push('/Post');

    };
 */