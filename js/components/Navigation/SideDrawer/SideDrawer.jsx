import React from 'react';
import ReactDOM from 'react-dom';
import Logo from '../../Logo/Logo.jsx';
import NavItems from '../NavItems/NavItems.jsx';

class SideDrawer extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
    <div className='sideDrawer'>
      <Logo height='10%'/>
      <nav>
        <NavItems />
      </nav>
    </div>
    )
  }
}

export default SideDrawer;