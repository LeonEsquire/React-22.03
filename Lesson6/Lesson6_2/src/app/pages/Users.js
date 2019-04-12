    
import React from 'react';
import UserStore from '../stores/userStore';
import {addUser, getUsers} from '../actions/userActions.js';
import UsersList from '../components/UsersList';


export default class Users extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      users: []
    };
    this.onUserChange = this.onUserChange.bind(this);
    this.newUser = this.newUser.bind(this);
  }

  newUser() {
    const name = 'New User';    
    const email = 'anton1evdokimov@yandex.ru';
    const id = 335;
    const username = 'New Name';
    const phone = '+78120000000';
    const website = 'https://github.com';
    addUser(name, email, username, id, phone, website)
  }

  onUserChange() {
    this.setState({users: UserStore.posts});
  }

  componentDidMount() {
    PostStore.on('change', this.onUserChange);
    getPosts();
  }

  componentWillUnmount() {
    UserStore.removeListener('change', this.onUserChange);
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.newUser}>Добавить пользователя</button>
        <UsersList users={this.state.users}/>
      </div>
    );
  }
}
