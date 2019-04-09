import React from 'react';
import ReactDOM from 'react-dom';

import Blog from './app/components/Blog';
import WelcomeModal from './app/components/WelcomeModal';
const body = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const BlogItems = [
      {id: 31, postBody:{body}, title: 'Заголовок 1', date: "05.04.2019"},
      {id: 32, postBody:{body}, title: 'Заголовок 2', date: "05.04.2019"},
      {id: 33, postBody:{body}, title: 'Заголовок 3', date: "05.04.2019"},
      {id: 34, postBody:{body}, title: 'Заголовок 4', date: "05.04.2019"},
      {id: 35, postBody:{body}, title: 'Заголовок 5', date: "05.04.2019"},
    ];

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      showUnmountComponent: true,
      blogList: blogItems
    };
  }
  render() {
    return (
      <>
      <Blog items={this.state.blogList} titleBlog="Общий заголовок"/>
        {this.state.showUnmountComponent ? <WelcomeModal/> : null}
        <button onClick={() => {
          this.setState({showUnmountComponent: false})
        }}>Добавить запись</button>
      </>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
