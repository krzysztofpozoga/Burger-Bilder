import React from 'react';
import ReactDOM from 'react-dom';

class Layout extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
    <div>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className='layout'>{this.props.children}</main>
    </div>
    )
  }
}

export default Layout;