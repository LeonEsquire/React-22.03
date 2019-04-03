import React from 'react';

export default class LifeCycleUnmount extends React.Component {

  render() {
    return (
      <div>
        Лишний компонент
      </div>
    );
  }


  componentWillUnmount() {
    console.log('1. componentWillUnmount()')
  }
}