import React from 'react';
 
const divStyle = {
    position: 'fixed',
    top: '50%',
    left:'50%',
    transform: 'translate(-50%, -50%)'
  };

export default class WelcomeModal extends React.Component {
    constructor(props){
        super(props);
        this.state={
            modal:false
        };
        
    }
    componentDidMount(){
        this.setState({
            modal:true
        });
    }
    closeModal(){
        this.setState({
            modal:false
        })
    }
    render() {
        var content = <div id="modal" style={divStyle}>
        <button onClick={this.closeModal.bind(this)}></button>
        <h1>Заголовок модального окна!</h1>
        <p>Содержимое модального окна</p>
        </div>
        return (<>{this.state.modal && content}</>);
    }
}
