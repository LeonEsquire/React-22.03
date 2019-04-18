import React from 'react';
import ReactDOM from 'react-dom';

import Blog from './app/components/Blog';
import WelcomeModal from './app/components/WelcomeModal';
import "bootstrap/dist/css/bootstrap.min.css"

const Style = {
  width: "75%",
  paddingTop: "30px",
  margin: "auto"
}

const Body = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const BlogItems = [
  { id: 31, postBody: Body, title: 'Заголовок 1', date: "05.04.2019" },
  { id: 32, postBody: Body, title: 'Заголовок 2', date: "05.04.2019" },
  { id: 33, postBody: Body, title: 'Заголовок 3', date: "05.04.2019" },
  { id: 34, postBody: Body, title: 'Заголовок 4', date: "05.04.2019" },
  { id: 35, postBody: Body, title: 'Заголовок 5', date: "05.04.2019" },
];

const Items = { id: 36, postBody: Body, title: 'Заголовок 9 !!!', date: "07.04.2019" };

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      showUnmountComponent: true,
      blogList: BlogItems
    };
  }
  AddItems() {
    this.setState({
      blogList: [Items, ...this.state.blogList]
    })
  }
  render() {
    return (
      <div style={Style}>
        <button onClick={this.AddItems.bind(this)} className="btn btn-success">Добавить запись</button>
        <Blog items={this.state.blogList} titleBlog="Общий заголовок" />
        <WelcomeModal />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
