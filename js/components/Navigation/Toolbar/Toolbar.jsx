import React from 'react';
import ReactDOM from 'react-dom';
import Logo from '../../Logo/Logo.jsx';
import NavItems from '../NavItems/NavItems.jsx';

class Toolbar extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <header className='toolbar'>
        <div>MENU</div>
        <Logo height='80%'/>
        <nav className='desktopOnly'>
          <NavItems />
        </nav>
      </header>
    )
  }
}

export default Toolbar;