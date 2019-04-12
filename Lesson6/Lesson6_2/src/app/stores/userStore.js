import { ADD_USER, GET_USERS } from "../constants/userConstants";
import dispatcher from '../dispatcher';
import {EventEmitter} from 'events';

class userStore extends EventEmitter {
  constructor(){
    super();
    this.users = [];
    this.getUsers = this.getUsers.bind(this);
    this.change = this.change.bind(this);
    this.addUser = this.addUserind(this);
    this.handleActions = this.handleActions.bind(this);
  }

  getUsers(users)
  {
    this.users = users;
    this.change();
  }

  change() {
    this.emit('change');
  }

  addUser(post)
  {
    this.users = [user, ...this.users];
    this.change()
  }

  handleActions(action)
  {
    switch (action.type) {
      case ADD_USER: 
        this.addUser(action.data)
        break;
      case GET_USERS:
        this.getUsers(action.data)
        break;
    }
  }
}

const store = new userStore();
dispatcher.register(store.handleActions)
export default store;
