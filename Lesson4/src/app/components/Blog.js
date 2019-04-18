
import React from 'react';
import ReactDOM from 'react-dom';
import Post from './Post';
import "bootstrap/dist/css/bootstrap.min.css"


export default class Blog extends React.Component {
  constructor(props) {
    super(props);

  }
  //static getDerivedStateFromProps(props, state) {
  //  console.log('2. getDerivedStateFromProps(props, state)');
  //  return null;
  //}
  render() {
    console.log(this.props.items);
    let posts = this.props.items.map(item => {

      return <Post key={item.id} postBody={item.postBody} title={item.title} date={item.date} />
    });

    return (
      <div>
        <h1>{this.props.titleBlog}</h1>
        {posts}
      </div>
    );
  }
}
