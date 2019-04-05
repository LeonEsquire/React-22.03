import React from 'react';
import ReactDOM from 'react-dom';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('2. getDerivedStateFromProps(props, state)');
    return null;
  }

  render() {    
    return (
      <div>
        <h3>{props.title}</h3>
        <div>Дата: {props.date}</div>
        <div>{props.body}</div>
      </div>
    );
  }
}
