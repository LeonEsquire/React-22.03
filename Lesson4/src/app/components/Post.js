import React from 'react';
import ReactDOM from 'react-dom';

export default class Post extends React.Component {
  constructor(props) {
    super(props);  
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
