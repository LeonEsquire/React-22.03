import React from 'react';
import axios from 'axios';
import Post from './Post';

export default class PostList extends React.Component {
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
      return <Post key={post.id} {...post}/>
    })

    return (
      <>
        <h1>Посты</h1>
        {posts}
      </>
    );
  }

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/posts/')
    .then(response => {
      this.setState({posts: response.data})
    });
  }


}