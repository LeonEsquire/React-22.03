import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {fetchComment} from '../actions/commentActions';

class Comment extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchComment(this.props.commentId));
  }
  render()
  {
    //console.log(this.props.postId);
    return(
      <div className="card border-secondary mb-3">
      <div className="card-header">
      <h6>
        <Link to={`/posts/${this.props.postId}`}>
        {this.props.name}
        </Link>
      </h6>
      </div>
      <div className="card-body text-secondary">
        <p>{this.props.body}</p> 
        <span>{this.props.email}</span>         
      </div>
      
    </div>
    
    );
  }
}
function mapStateToProps(state) {
  return {
    comment: state.comment.comment,
    commentFetched: state.comment.fetched
  };
}

export default connect(mapStateToProps)(Comment);
