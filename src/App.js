import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Post from "./components/Post";
import AddPost from "./components/AddPost";
import About from "./components/About";
import "./App.css";
import uuid from "uuid";
import ViewPost from "./components/ViewPosts";
//import axios from 'axios';

class App extends Component {
  //========== create states to encompass the Post array =======
  state = {
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


  //==========Function to delete deletepost ========
  delPost = id => {
    this.setState({
      articles: [...this.state.articles.filter(post => post.id !== id)]
    });
  };
 
 

  render() {
    return (
      <Router>
        <div className='head'>
          <div className='container'>
            <div className='wrapper'>
              <Header />   
              <Route
                exact
                path="/Post"
                render={() => <Post {...this.props} articles={this.state.articles}
                  delPost={this.delPost} />}
              />
              <Route exact path="/About" component={About}></Route>
              <Route
                exact
                path="/AddPost"
                render={() => <AddPost {...this.props} addNewPost={this.addNewPost} Redirect to="/Post" />}
              /> 
              <Route exact path={`/post/:id`} render={(props) => {
                return <ViewPost articles={this.state.articles} {...this.props} {...this.state.articles} id={props.match.params.id} delPost = {this.delPost} 
              />}
            }  
          />
            </div>
          </div>
        </div>
      </Router >
    );
  }
}

export default App;
