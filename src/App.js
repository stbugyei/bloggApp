import React, { Component } from "react";
//import loadArticles from "./components/articles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Post from "./components/Post";
import AddPost from "./components/AddPost";
//import EditPost from "./components/EditPost";
import EditPost from "./components/editPost2";
import About from "./components/About";
import "./App.css";
import uuid from "uuid";
import ViewPost from "./components/ViewPosts";
import articles from "./components/articles";
//import axios from 'axios';

class App extends Component {
  //========== create states to encompass the Post array =======
  constructor(props) {
    super(props);
    this.state = {
      articles: articles,
    };
    this.getPostDetails = this.getPostDetails.bind(this);
    this.updateState = this.updateState.bind(this);
  };

 /* componentDidMount() {
    const articles = loadArticles();
    this.setState({articles})
  }*/

  //==========Function to addNewPost =======
  addNewPost = (title, category, content) => {
    const newPost = {
      id: uuid.v4(),
      title,
      category,
      content
    };
    this.setState({ articles: [...this.state.articles, newPost] });
  };
  
  //==========Function to editPost =======

  getPostDetails(id) { 
    const articles = this.state.articles;
    articles.map(post => {
      if (post.id === id) {
        post.id = this.state.id;
        post.title = this.state.title;
        post.content = this.state.content;
        post.category = this.state.category;
      }
      return post;
    })
    this.setState({
      articles: articles
    })
  };

  updateState(data) {
    this.setState(prevState => {
      return {
        articles: data
      };
    });
  
  };

  //==========Function to editPost =======
  editPost = (id, PostFiltered) => {
    const articles = [...this.state.articles];
    let index = articles.findIndex(post => post.id === id);
    articles[index] = PostFiltered;
    this.setState({
      articles: articles
    })
  };z
  

  //==========Function to delete deletepost ========
  delPost = id => {
    this.setState({
      articles: [...this.state.articles.filter(post => post.id !== id)]
    });
  };


  //==========Function for onchage ========
  onChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }


  render() {
    return (
      <div className='head'>
        <div className='container'>
          <div className='wrapper'>
            <Router>
              <Header />
              <Route
                exact
                path="/"
                render={() =>
                  < Post
                    {...this.props}
                    articles={this.state.articles}
                    delPost={this.delPost} />}
              />
              <Route
                exact
                path="/About" component={About}>
              </Route>
              <Route
                exact
                path="/AddPost"
                render={() =>
                  <AddPost {...this.props}
                  addNewPost={this.addNewPost}
                  Redirect to="/Post" />}
              />
              <Route
                exact
                path={`/post/:id`}
                render={props => (
                 <ViewPost
                    articles={this.state.articles}
                    {...this.props}
                    id={props.match.params.id}
                    delPost={this.delPost}
                    onChange={this.onChange}
                    editPost={this.editPost}
                    {...this.state}
                    getPostDetails={this.getPostDetails}
                    updateState={this.state.updateState}
                  />
                )}
              />
              <Route
                exact
                path={`/post/edit/:id`}
                render={(props) =>
                  <EditPost
                  {...this.props}
                  articles={this.state.articles}
                  delPost={this.delPost}
                  onChange={this.onChange}
                    editPost={this.editPost}
                    {...this.state}
                  getPostDetails={this.getPostDetails}
                  updateState={this.updateState}
                />
                }
              />
            </Router >
          </div>
        </div>
      </div>

    );
  }
}

export default App;
