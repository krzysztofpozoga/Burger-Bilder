import React from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className='drawerToggle' onClick={this.props.clicked}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }
}

export default Toggle;