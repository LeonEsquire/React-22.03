import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import MainPage from '../pages/Main';
import PageNotFound from '../pages/PageNotFound';
import Users from '../pages/Users';
import User from '../pages/User';
import Posts from '../pages/Posts';
import Post from '../pages/Post';
import Comments from '../pages/Comments';
import Comment from '../pages/Comment';
import Base from '../pages/Base';


export default class Layout extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
       	<Route path="/" component={Base}>
			      <IndexRoute component={MainPage}/>
         <Route path="users" component={Users}>
            <Route path=":userId" component={User}/>
        </Route>
        <Route path="posts" component={Posts}>
			  	  <Route path=":postId" component={Post}/>
			  </Route>
			  <Route path="comments" component={Comments}>
				    <Route path=":commentId" component={Comment}/>
			  </Route>
 			      <Route path="*" component={PageNotFound}/>
		    </Route>
    </Router>
    )
  }
}