import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "./app/layouts/layout";
import MainPage from "./app/pages/Main";
import PageNotFound from "./app/pages/PageNotFound";
import Users from "./app/pages/Users";
import User from "./app/pages/User";
import Posts from "./app/pages/Posts";
import Post from "./app/pages/Post";
import Comments from "./app/pages/Comments";
import Comment from "./app/pages/Comment";

import store from './store';


ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={Layout}>
				<IndexRoute component={MainPage}/>
				<Route path="users" component={Users}>
					<Route path=":userId" component={User}/>
				</Route>
				<Route path="posts" component={Posts}>
					<Route path=":postId" component={Post} />
				</Route>
				<Route path="comments" component={Comments}>
					<Route path=":commentId" component={Comment} />
				</Route>
				<Route path="*" component={PageNotFound}/>
			</Route>
		</Router>
	</Provider>, document.getElementById("root"));


	// <Layout>
	// 	<About/>
	// </Layout>