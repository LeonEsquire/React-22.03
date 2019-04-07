import React from 'react';
import axios from 'axios';
import Comment from './Comment';

export default class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: []
    };
  }

  render()
  {
    if (!this.state.comment.length) {
      return null;
    }

    const comment = this.state.comment.map((comment, index) => {
      return <Comment key={index} {...comment}/>
    })

    return (
      <>
        <h1>Комментарии</h1>
        {comment}
      </>
    );
  }

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/comments/')
    .then(response => {
      this.setState({comment: response.data})
    });
  }
}