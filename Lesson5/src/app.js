import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';

import Layout from "./app/layouts/layout";
import MainPage from "./app/pages/Main";
import PageNotFound from "./app/pages/PageNotFound";
import Users from "./app/pages/Users";
import User from "./app/pages/User";
import PostsPage from "./app/pages/Posts";
import PostPage from "./app/pages/Post";
import CommentsPage from "./app/pages/Comments";
import CommentPage from "./app/pages/Comment";


ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={MainPage}/>
			<Route path="users" component={Users}>
				<Route path=":userId" component={User}/>
			</Route>
			<Route path="posts" component={PostsPage}>
				<Route path=":postId" component={PostPage} />
			</Route>
			<Route path="comments" component={CommentsPage}>
				<Route path=":commentId" component={CommentPage} />
			</Route>
			<Route path="*" component={PageNotFound}/>
		</Route>
	</Router>, document.getElementById("root"));


	// <Layout>
	// 	<About/>
	// </Layout>
