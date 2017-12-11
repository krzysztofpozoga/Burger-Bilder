import React from 'react';
import ReactDOM from 'react-dom';
import NavItem from './NavItem/NavItem.jsx'


class NavItems extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
    <ul className='navItems'>
      <NavItem link='/' active>Burger Bilder</NavItem>
      <NavItem link='/'>Checkout</NavItem>
    </ul>
    )
  }
}

export default NavItems;