import React from 'react';
import ReactDOM from 'react-dom';
import Toolbar from './Navigation/Toolbar/Toolbar.jsx'

class Layout extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
    <div>
      <Toolbar />
      <main className='layout'>{this.props.children}</main>
    </div>
    )
  }
}

export default Layout;