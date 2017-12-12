import React from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div onClick={this.props.clicked}>MENU</div>
    )
  }
}

export default Toggle;