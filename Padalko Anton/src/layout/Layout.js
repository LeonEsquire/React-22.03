import React from 'react';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';

import {Link} from 'react-router';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.brand = 'React blog!';
  }

  static isActive(href) {
    return window.location.pathname === href;
  }

  render()
  {
    return(
      <div>
        <Menu brand={this.brand}>
          <MenuItem href="/" active={Layout.isActive('/')}>
            Главная
          </MenuItem>
          <MenuItem href="/users" active={Layout.isActive('/users')}>
            Пользователи
          </MenuItem>
          <MenuItem href="/posts" active={Layout.isActive('/posts')}>
            Посты
          </MenuItem>
          <MenuItem href="/comments" active={Layout.isActive('/comments')}>
            Комметнарии
          </MenuItem>
        </Menu>
        <div className="container">
          <div className="row">
            <div className="col-12">
              {this.props.children}
            </div>
          </div>
        </div>
        <footer className="card-footer">
          &copy; 2019
        </footer>
      </div>
    );
  }
}