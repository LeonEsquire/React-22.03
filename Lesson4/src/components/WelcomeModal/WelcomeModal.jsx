import React from 'react';
import './WelcomeModal.styl';

class WelcomeModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {modal: false}
  }

  componentDidMount(){
    this.setState({modal: true})
  }

  close = () =>{
    this.setState({modal: false})
  };

  render() {
    return(
      <div className={this.state.modal ? "" : " model-hidden"}>
        <div id = "open-modal" className = "modal-window model-shown">
          <div>
            <h2>Добро пожаловать</h2>
            <div>Приветсвенное сообщение для юзера</div>
            <div
              className="modal-close"
              onClick={this.close}
            >
              Close
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WelcomeModal
