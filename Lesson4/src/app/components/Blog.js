   
import React from 'react';
import ReactDOM from 'react-dom';
import Post from './Post';

export default class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    };
  }
 
  //static getDerivedStateFromProps(props, state) {
  //  console.log('2. getDerivedStateFromProps(props, state)');
  //  return null;
  //}

  render() {
    let items = this.props.items.map(item => {
      return <MenuItem key={item.id} body={item.postBody} title={item.title} date={item.date}/>
    });
    return (
      <>
      <h1>{this.props.titleBlog}</h1>
        {items}
      </>
    );
  }

  componentDidMount() {
    console.log('4. componentDidMount()')
  }
}
