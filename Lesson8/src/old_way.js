import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      list: []
    };
    this.handleData = this.handleData.bind(this);
  }

  handleData(event) {
    this.setState({ data: event.target.value });
  }

  addToList(element) {
    this.setState({ list: [...this.state.list, element], data: "" });
  }

  render() {
    let todoList;
    if (this.state.list.length) {
      todoList = this.state.list.map(element => <li key={element}> {element} </li>);
    }
    console.log(todoList)
    return (
      <>
        <ul>
          {todoList}
        </ul>
        <input type="text" onChange={this.handleData} value={this.state.data} />
        <button
          onClick={() => {
            this.addToList(this.state.data);
          }}
        >
          Добавить в список
        </button>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
