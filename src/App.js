import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import { useHistory } from "react-router-dom";
import Header from "./components/Header";
import Post from "./components/Post";
import AddPost from "./components/AddPost";
import About from "./components/About";
import "./App.css";
import uuid from "uuid";
//import axios from 'axios';

class App extends Component {
  //========== create states to encompass the Post array =======
  state = {
    //=== <create Post array and use uuid library to dynamically generate id====
    articles: [
      {
        id: uuid.v4(),
        title: 'My day in integrify',
        category: 'work',
        content: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
      },
      {
        id: uuid.v4(),
        title: 'My talk at React Meetup',
        category: 'speech',
        content: 'Something content here. Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content',
      },
      {
        id: uuid.v4(),
        title: 'Running in the forest',
        category: 'sport',
        content: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content',
      }
    ]
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



  //==========Function to delete Todolist ========
  delPost = id => {
    this.setState({
      articles: [...this.state.articles.filter(post => post.id !== id)]
    });
  };
  //==========Function to check completed box ========
  render() {

    // console.log(this.state.Post)
    return (
      <Router>
        <div className='head'>
          <div className='container'>
            <div className='wrapper'>
              <Header />
              <Route
                path="/Post"
                render={() => <Post {...this.props} articles={this.state.articles}
                  delPost={this.delPost} Redirect to="/About" />}
              />
              <Route path="/About" component={About}></Route>
              <Route
                path="/AddPost"
                render={() => <AddPost {...this.props} addNewPost={this.addNewPost} Redirect to="/Post" />}
              />
            </div>
          </div>
        </div>
      </Router >
    );
  }
}

export default App;
