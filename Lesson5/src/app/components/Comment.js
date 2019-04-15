import React from 'react';
import {Link} from 'react-router';

export default class Comment extends React.Component {
  
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