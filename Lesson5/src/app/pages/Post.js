import React from 'react';
import axios from 'axios';
import OnePost from '../components/Post';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null
    };
  }

  render()
  {
    console.log('OnePost');
    return(      
      <div>
        {this.state.post && <OnePost {...this.state.post}/>}
      </div>
    );
  }

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/posts/' + this.props.params.postId)
    .then(response => {
      console.log(response);
      this.setState({post: response.data})
    })
  }
}