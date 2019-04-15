import React from 'react';
import axios from 'axios';
import PostContent from '../components/Post';
import CommentList from '../components/CommentList';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null
    };
  }

  render()
  {
    
    return(
      <div>
        {this.state.post && <PostContent {...this.state.post}/>}
        <hr/>
        <CommentList post={this.state.post}/> 
       
      </div>
    );
  }

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/posts/' + this.props.params.postId)
    .then(response => {
      this.setState({post: response.data})
    })
  }
}