import React from 'react';
import axios from 'axios';
import Comment from './Comment';

export default class CommentsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  render()
  {
    if (!this.state.comments.length) {
      return null;
    }

    const list = this.state.comments.map((comment) => {
      return <Comment key={comment.id} {...comment}/>
    })

    return (
      <>
        <h1>Комментарии</h1>
        {list}
      </>
    );
  }

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/comments/')
    .then(response => {
      this.setState({comments: response.data})
    });
  }


}