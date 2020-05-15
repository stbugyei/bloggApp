import React, { Component } from "react";
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


class App extends Component {
  //========== create states to encompass the Post array =======
  constructor(props) {
    super(props);
    this.state = {
      articles: articles,
    };
  };

  
  //==========Function to addNewPost =======
  addNewPost = (image, title, category, date, sypnosis, content) => {
    const newPost = {
      id: uuid.v4(),
      image,
      date,
      sypnosis,
      title,
      category,
      content
    };
    this.setState({ articles: [...this.state.articles, newPost] });
  };

  //==========Function to editPost =======

  editPost = (filteredPost, id) => {
    const singleArticles = this.state.articles.map((post) => {
    return post.id === id ? filteredPost : post
    })
    this.setState({articles: singleArticles})
  }


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
        <div className='container'>
   
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
                    />}
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
                  />
                )}
              />
              <Route
                exact
                path={`/post/edit/:id`}
                render={(props) =>
                  <EditPost id={props.match.params.id}
                    {...this.props}
                    articles={this.state.articles}
                    delPost={this.delPost}
                    onChange={this.onChange}
                    editPost={this.editPost}
                    {...this.state}
                  />
                }
              />
            </Router >
          </div>
    
    );
  }
}

export default App;
