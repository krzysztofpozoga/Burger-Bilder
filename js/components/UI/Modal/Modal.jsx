import React from 'react';
import ReactDOM from 'react-dom';
import Backdrop from '../Backdrop/Backdrop.jsx';

class Modal extends React.Component {
  constructor(props){
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState){
    return nextProps.show !== this.props.show;
    // if(nextProps.show !== this.props.show) {
    //   return true;
    // } TO SAMO CO WYŻEJ
  }
  render(){
    return (
      <div>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
        <div className='modal' style={{transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: this.props.show ? '1' : '0'}}>
          {this.props.children}
        </div>
      </div>
      
    )
  }
}

export default Modal;