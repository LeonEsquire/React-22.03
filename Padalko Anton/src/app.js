import './app.styl'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';

import Layout from './layout/layout';
import MainPage from 'pages/Main';
import User from 'pages/User';
import Users from 'pages/Users';
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
          <Route path="*" component={PageNotFound} />
        </Route> 
      </Router>
    );
  }

}

ReactDOM.render(<App/>, document.querySelector('#root'));