import React from 'react';
import axios from 'axios';
import Post from './Post';

export default class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  render()
  {
    if (!this.state.posts.length) {
      return null;
    }

    const posts = this.state.posts.map((post, index) => {
      return <Post key={index} {...post}/>
    });

    return (
      <>
        <h1>Посты</h1>
        {posts}
      </>
    );
  }

  componentDidMount() {
    let url;
    if (this.props.userId){
      url = `https://jsonplaceholder.typicode.com/posts/?userId=${this.props.userId}`
    }
    else{
      url = `https://jsonplaceholder.typicode.com/posts`
    }

    axios.get(url)
    .then(response => {
      this.setState({posts: response.data})
    });
  }


}