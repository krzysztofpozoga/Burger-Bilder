import React from 'react';
import ReactDOM from 'react-dom';
import Toolbar from './Navigation/Toolbar/Toolbar.jsx';
import SideDrawer from './Navigation/SideDrawer/SideDrawer.jsx'

class Layout extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showSideDrawer: true
    }
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false})
  }

  render(){
    return (
    <div>
      <Toolbar />
      <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
      <main className='layout'>{this.props.children}</main>
    </div>
    )
  }
}

export default Layout;