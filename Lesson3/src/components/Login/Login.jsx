import React, {Fragment, Component}  from 'react';
import './Login.styl'

class Login extends Component {
  render() {
    const bc = 'login_page' // base class
    return (
      <div className={bc}>
        <input type="text" className={`${bc}-login`}/>
        <input type="pass" className={`${bc}-pass`}/>
        <button className={`${bc}-sing_in`}>Войти</button>
      </div>
    )
  }

}
export default Login