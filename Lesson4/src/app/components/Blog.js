   
import React from 'react';
import ReactDOM from 'react-dom';
import Post from './Post';

export default class Blog extends React.Component {
  constructor(props) {
    super(props);
    
  } 
  //static getDerivedStateFromProps(props, state) {
  //  console.log('2. getDerivedStateFromProps(props, state)');
  //  return null;
  //}
  render() {
    let posts = this.props.items.map(item => {
      return <Post key={item.id} body={item.postBody} title={item.title} date={item.date}/>
    });
    console.log(posts);
    return (
      <>
      <h1>{this.props.titleBlog}</h1>
        {posts}
      </>
    );
  }

  componentDidMount() {
    console.log('4. componentDidMount()')
  }
}
