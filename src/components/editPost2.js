import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";


export class EditPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: {
                id: '',
                image: "",
                title: "",
                date: "",
                sypnosis: "",
                category: "",
                content: "",
            }
        };
    }


    componentDidMount() {
        const { articles, id } = this.props
        const post = articles.find((post) => {
            return post.id === id
        })
        this.setState({ articles: post })
    }


    static contextTypes = {
        router: PropTypes.object
    }


    //========= An onSubmit event for submitting the state(articles)=========

    onSubmit = e => {
        e.preventDefault();
        this.props.editPost(this.state.articles, this.props.id);
        const id = this.props.match.params.id
        this.props.history.push(`/post/${id}`);
    };


    //========= An onChange event for populating the state(articles)=========

    onChange = e => {
        const { name, value } = e.target;
        const editPost = { ...this.state.articles, [name]: value }
        this.setState({ articles: editPost })
    }



    render() {

        const { title, category, content, date, image } = this.state.articles;
        const id = this.props.match.params.id
        return (
            <>
                <form>
                    <div className="form_content">
                        <div className="fieldset_content">
                            <h1>Edit Post</h1>
                            <div className="Search_Submit">

                                <div className='card_content-category'>
                                    <img
                                        style={post_img}
                                        src={image}
                                        alt=" "
                                        onChange={this.onChange}
                                    />
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        id="title"
                                        name='title'
                                        placeholder="Edit Title"
                                        value={title}
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
                                        value={category}
                                        onChange={this.onChange}
                                    >
                                    </input>
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        id="date"
                                        name="date"
                                        placeholder="+ Date"
                                        value={date}
                                        onChange={this.onChange}
                                    >
                                    </input>
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        id="sypnosis"
                                        name='sypnosis'
                                        placeholder="+ Sypnosis"
                                        value={this.state.sypnosis}
                                        onChange={this.onChange}
                                    >
                                    </input>
                                </div>

                                <div>
                                    <pre>
                                        <textarea
                                            id="content"
                                            name='content'
                                            placeholder="Edit Content"
                                            value={content}
                                            onChange={this.onChange} cols="50" rows="10">
                                        </textarea>
                                    </pre>
                                </div>

                                <div className='buttons'>
                                    <div>
                                        <Link to={`/post/${id}`}>
                                            <button className='btn'>
                                                Cancel
                                                </button>
                                        </Link>
                                    </div>

                                    <div>
                                        <Link to={`/post/${id}`}>
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
            </>
        );
    }
}

const post_img = {
    width: '100%',
    marginBottom: '15px'
}
//=========== creating propTypes ===========
/*EditPost.propTypes = {
    EditPost: PropTypes.func
};
*/

export default withRouter(EditPost);
