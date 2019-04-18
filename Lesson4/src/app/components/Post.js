import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"

const Style = {
  marginTop: "30px"
}
export default class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className="card" style={Style}>
        <div className="card-header">{this.props.title}</div>
        <div>Дата: {this.props.date}</div>
        <div>{this.props.postBody}</div>
      </div>
    );
  }
}
