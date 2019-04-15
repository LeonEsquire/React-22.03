import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {fetchPost} from '../actions/postActions';

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchPost(this.props.postId));
  }
  render()
  {
    return(
      <div className="card border-secondary mb-3">
        <div className="card-header">
        <h4>
          <Link to={`/posts/${this.props.id}`}>
          {this.props.title}
          </Link>
        </h4>
        </div>
        <div className="card-body text-secondary">
          <p>{this.props.body}</p>          
        </div>        
      </div>
      
    );
  }  
}

function mapStateToProps(state) {
  return {
    post: state.post.post,
    postFetched: state.post.fetched
  };
}

export default connect(mapStateToProps)(Post);
