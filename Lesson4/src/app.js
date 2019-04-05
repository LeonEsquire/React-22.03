import React from 'react';
import ReactDOM from 'react-dom';

import Blog from './app/components/Blog';
import WelcomeModal from './app/components/WelcomeModal';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      showUnmountComponent: true
    };
  }

  render() {
    return (
      <>
        {this.state.showUnmountComponent ? <WelcomeModal/> : null}
        <button onClick={() => {
          this.setState({showUnmountComponent: false})
        }}>Удалить компонент</button>
      </>
    );
  }

}


ReactDOM.render(<App/>, document.querySelector('#root'));
