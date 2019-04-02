import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <>
        <form action="/login">
          <p>
            <strong>Логин:</strong>
            <input type="text" name="login" maxlength="30" size="39" />
          </p>
          <p>
            <strong>Пароль:</strong>
            <input type="password" name="password" maxlength="30" size="39" />
          </p>
          <input type="submit" value="Login/Войти" />
        </form>
      </>
    );
  }
}

export default Login;
