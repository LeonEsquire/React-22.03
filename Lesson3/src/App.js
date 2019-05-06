import React from 'react';
import ReactDOM from 'react-dom';
import './App.styl';
import Menu from 'components/Menu';
import Login from 'components/Login';


class App extends React.Component {
  render() {
    const menuItems = [
      {href:'/', title: 'Главная'},
      {href:'/about', title: 'О нас'},
      {href:'/service', title: 'Услуги'},
      {href:'/contacts', title: 'Контакты'},
    ];

    return (
      <div className="app">
        <Login/>
        <Menu items={menuItems} titleMenu="Логотип"/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));