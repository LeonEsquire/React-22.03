import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Comment from './Comment';

class CommentsList extends React.Component {

  render() {
    const { comments } = this.props;

    if (!comments.length) {
      return null;
    }

    const commentsList = comments.map((comment, index) => {
      return <Comment key={index} {...comment}/>
    })

    return (
      <>
        <h1>Комментарии</h1>
        {commentsList}
      </>
    );
  }

  componentDidMount() {
    //axios.get('http://jsonplaceholder.typicode.com/comments/')
    //.then(response => {
    //  this.setState({comments: response.data})
    //});
  }
}

const mapStateToProps = ({ comments }) => {
  return { comments };
};

export default connect(mapStateToProps)(CommentsList);