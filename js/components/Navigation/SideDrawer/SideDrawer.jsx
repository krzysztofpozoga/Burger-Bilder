import React from 'react';
import ReactDOM from 'react-dom';
import Logo from '../../Logo/Logo.jsx';
import NavItems from '../NavItems/NavItems.jsx';
import Backdrop from '../../UI/Backdrop/Backdrop.jsx';

class SideDrawer extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    let attachedClasses = ['sideDrawer', 'close'];
    if(this.props.open){
      attachedClasses = ['sideDrawer', 'open'];
    }
    return (
      <div>
        <Backdrop show={this.props.open} clicked={this.props.closed}/>
        <div className={attachedClasses.join(' ')}>
          <Logo height='10%'/>
          <nav>
            <NavItems />
          </nav>
        </div>
      </div>  
    )
  }
}

export default SideDrawer;