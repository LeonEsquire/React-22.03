import React from "react";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: this.props.items
    };
    this.myRef = React.createRef();
  }

  addUser() {
    const userName = this.myRef.current.value;

    if (userName.length < 3) {
      alert('Имя должно включать в себя более 2 символов');
      return;
    }

    const users = [...this.state.users, userName];
    this.setState({users});
    this.myRef.current.value = '';
  }

  render() {
    const users = this.state.users.map((user, index) => {
      return <li key={index}>{user}</li>
    })

    return (
      <div>
        <ul>
          {users}
        </ul>
        <hr/>
        <label>
          Ввелите имя пользователя: <input ref={this.myRef} type="text" placeholder="имя"/>
        </label>
        <button onClick={this.addUser.bind(this)}>Добавить пользователя</button>
      </div>
    );
  }
}

export default Users;
