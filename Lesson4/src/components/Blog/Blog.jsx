import React from 'react';
import './Blog.styl';
import Post from 'components/Post'

class Blog extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const posts = this.props.posts.map(post => <Post key={post.id} data={post} />);

    return (
      <div className={"blog"}>
        {posts}
      </div>
    );
  }
}
export default Blog