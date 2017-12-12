import React from 'react';
import ReactDOM from 'react-dom';
import Logo from '../../Logo/Logo.jsx';
import NavItems from '../NavItems/NavItems.jsx';
import Toggle from '../SideDrawer/Toggle.jsx'

class Toolbar extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <header className='toolbar'>
        <Toggle clicked={this.props.drawerToggleClicked}/>
        <Logo height='80%'/>
        <nav className='desktopOnly'>
          <NavItems />
        </nav>
      </header>
    )
  }
}

export default Toolbar;