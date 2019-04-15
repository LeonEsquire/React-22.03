// import React from "react";
// import ReactDOM from "react-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';

// import Layout from "./app/layouts/layout";
// import MainPage from "./app/pages/Main";
// import PageNotFound from "./app/pages/PageNotFound";
// import Users from "./app/pages/Users";
// import User from "./app/pages/User";
// import Posts from "./app/pages/Posts";
// import Post from "./app/pages/Post";
// import Comments from "./app/pages/Comments";
// import Comment from "./app/pages/Comment";


import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import Layout from './app/layouts/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <>
    {/* <h1>TEST</h1> */}
	<Provider store={store}>
    <Layout />    
</Provider>
</>
, document.getElementById("root"));