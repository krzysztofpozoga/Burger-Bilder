import React from 'react';
import ReactDOM from 'react-dom';

class Modal extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className='modal'>
        {this.props.children}
      </div>
    )
  }
}

export default Modal;