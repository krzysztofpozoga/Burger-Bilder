import React from 'react';
import ReactDOM from 'react-dom';


class NavItem extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <li className='navItem'>
        <a href={this.props.link} className={this.props.active ? 'active' : null}>{this.props.children}</a>
      </li>
    )
  }
}

export default NavItem;