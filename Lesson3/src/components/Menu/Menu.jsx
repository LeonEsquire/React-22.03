import React from 'react';
import './Menu.styl';
import MenuItem from './MenuItem'

class Menu extends React.Component {
  render() {
    const items = this.props.items.map((item, index) => {
      return <MenuItem key={index} href={item.href}>{item.title}</MenuItem>
    })
    
    return (
      <>
        <div className='title'>{this.props.titleMenu}</div>
        <div className='menu'>
          <ul>
            {items}
          </ul>
        </div>
      </>
    );
  }


}
export default Menu