import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import Login from './Login';

class App extends React.Component {
  render() {
    const menuItems = [
      {id: 31, href:'/', title: 'Главная'},
      {id: 32, href:'/about', title: 'О нас'},
      {id: 33, href:'/service', title: 'Услуги'},
      {id: 34, href:'/contacts', title: 'Контакты'},
    ];

    return <div>
      <Login />
      <h1>Первое приложение на React</h1>
      <p>Hello React!</p>
      <Menu items={menuItems} titleMenu="Основное меню сайта"/>
    </div>
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
