import React from 'react';

export default class LifeCyclceMount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    };
    console.log('1. constructor()')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('2. getDerivedStateFromProps(props, state)');
    return null;
  }

  render() {
    console.log('3. render()')
    console.log(this);
    return (
      <div>
        Это LifeCyclceMount
      </div>
    );
  }

  componentDidMount() {
    console.log('4. componentDidMount()')
  }
}