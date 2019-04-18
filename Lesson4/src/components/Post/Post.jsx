import React from 'react';
import './Post.styl';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.data
  }

  render() {
    return (
      <div className={"post"} id={this.data.id}>
        <div className="post-title">{this.data.title}</div>
        <div className="post-text">{this.data.text}</div>

        <div className="post-signature">
          <div className="post-date">{this.data.date}</div>
          <div className="post-author">{this.data.author}</div>
        </div>

      </div>
    );
  }
}
export default Post