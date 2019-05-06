import './App.styl'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Layout from './layout/Layout';
import MainPage from 'pages/Main';
import User from 'pages/User';
import Users from 'pages/Users';
import Posts from 'pages/Posts';
import Post from 'pages/Post';
import Comments from 'pages/Comments';
import Comment from 'pages/Comment';
import PageNotFound from 'pages/PageNotFound';


class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={MainPage} />
          <Route path="users" component={Users}>
            <Route path=":userId" component={User} />
          </Route>
          <Route path="posts" component={Posts}>
            <Route path=":postId" component={Post} />
            <Route path="user/:userId" component={Posts} />
          </Route>
          <Route path="comments" component={Comments}>
            <Route path=":commentId" component={Comment} />
            <Route path="post/:postId" component={Comment} />
          </Route>
          <Route path="*" component={PageNotFound} />
        </Route> 
      </Router>
    );
  }

}

ReactDOM.render(<App/>, document.querySelector('#root'));