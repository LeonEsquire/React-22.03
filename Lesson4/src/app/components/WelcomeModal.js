import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"



export default class WelcomeModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

    }
    componentDidMount() {
        this.setState({
            modal: true
        });
    }
    closeModal() {
        this.setState({
            modal: false
        })
    }
    render() {
        const modalOverlay = {
            zIndex: "900",
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "grey",
            opacity: "0.7"
        }
        const divStyle = {
            zIndex: "910",
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: "700px"
        };
        var content = <><div id="modal" style={divStyle} className="card">
            <button onClick={this.closeModal.bind(this)} className="btn btn-success">Закрыть</button>
            <div className="card-header">Заголовок модального окна!</div>
            <p className="card-body">
                Содержимое модального окна<br />
                Содержимое модального окна<br />
                Содержимое модального окна<br />
                Содержимое модального окна<br />
                Содержимое модального окна <br />
            </p>
        </div>
            <div style={modalOverlay} id="modal-overlay"></div>
        </>
        return (<>{this.state.modal && content}</>);
    }
}
