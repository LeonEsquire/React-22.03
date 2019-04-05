import './app.styl'
import React from 'react';
import ReactDOM from 'react-dom';
import WelcomeModal from 'components/WelcomeModal'
import Blog from 'components/Blog'

class App extends React.Component {
  render() {
    const posts = [
      {id: 1, title: 'Заголовок_1', date: '05.04.19', author: 'John', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae, blanditiis consectetur consequatur ea eligendi fugit incidunt, officia, officiis omnis quia quod rem repellat similique sunt totam vitae voluptatem voluptatibus.'},
      {id: 2, title: 'Заголовок_2', date: '05.04.19', author: 'Sarah', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae, blanditiis consectetur consequatur ea eligendi fugit incidunt, officia, officiis omnis quia quod rem repellat similique sunt totam vitae voluptatem voluptatibus.'},
      {id: 3, title: 'Заголовок_3', date: '05.04.19', author: 'Boris',text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae, blanditiis consectetur consequatur ea eligendi fugit incidunt, officia, officiis omnis quia quod rem repellat similique sunt totam vitae voluptatem voluptatibus.'},
      {id: 4, title: 'Заголовок_4', date: '05.04.19', author: 'Maria', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae, blanditiis consectetur consequatur ea eligendi fugit incidunt, officia, officiis omnis quia quod rem repellat similique sunt totam vitae voluptatem voluptatibus.'},
    ];

    return (
      <div className={"app"}>
        <Blog posts={posts} />
        <WelcomeModal/>
      </div>
    );
  }

}

ReactDOM.render(<App/>, document.querySelector('#root'));