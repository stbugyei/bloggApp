import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import SocialMedia from "./components/SocialMedia";
import Post from "./components/Post";
import AddPost from "./components/AddPost";
//import EditPost from "./components/EditPost";
import EditPost from "./components/editPost2";
import About from "./components/About";
import "./App.css";
import uuid from "uuid";
import ViewPost from "./components/ViewPosts";
//import axios from 'axios';

class App extends Component {
  //========== create states to encompass the Post array =======
  constructor(props){
  super(props)
 this.state = {
    //=== <create Post array and use uuid library to dynamically generate id====
    articles: [
      {
        id: uuid.v4(),
        title: 'My day in integrify',
        category: 'Work',
        content: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
      },
      {
        id: uuid.v4(),
        title: 'My talk at React Meetup',
        category: 'Speech',
        content: 'Something content here. Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content',
      },
      {
        id: uuid.v4(),
        title: 'Running in the forest',
        category: 'Sport',
        content: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content',
      }
   ]
  }
  };


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

  getPostDetails = (id, title, category, content) => {
    const articles = this.state.articles;
    articles.map(post => {
      if (post.id === id) {
        post.title = title;
        post.category = category;
        post.content = content;
      }
      return post.id === id
    })
    this.setState({
      articles: articles
    })
  }

  editPost = (id, PostFiltered) => {

    const articles = [...this.state.articles];
    let index = articles.findIndex(post => post.id === id);
    articles[index] = PostFiltered;
    this.setState({
      articles: articles
    })
  };

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
                path="/Post"
                render={() =>
                  <Post {...this.props}
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
                render={() => <AddPost {...this.props}
                  addNewPost={this.addNewPost}
                  Redirect to="/Post" />}
              />
              <Route
                exact
                path={`/post/:id`}
                render={(props) => {
                  return <ViewPost articles={this.state.articles}
                    {...this.props}
                    id={props.match.params.id}
                    delPost={this.delPost}
                    onChange={this.onChange}
                    editPost={this.editPost}
                    {...this.state}
                    getPostDetails={this.getPostDetails}/>
                }
                }
              />
                <Route
                exact
                path={`/post/edit/:id`}
                render={(props) => <EditPost {...this.props}
                  articles={this.state.articles}
                  {...this.state}
                  id={props.match.params.id}
                  delPost={this.delPost}
                  onChange={this.onChange}
                  editPost={this.editPost}
                  getPostDetails={this.getPostDetails}/>}
              />
            </Router >
          </div>
        </div>
      </div>

    );
  }
}

export default App;
