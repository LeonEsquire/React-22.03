    
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
    const userId = 33;

    addPost(name, email, userId)
  }

  onUserChange() {
    this.setState({posts: PostStore.posts});
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
        <button className="btn btn-primary" onClick={this.newUser}>Добавить пост</button>
        <UsersList users={this.state.users}/>
      </div>
    );
  }
}
