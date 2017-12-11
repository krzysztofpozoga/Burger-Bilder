import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
     <button className={['button', this.props.btnType].join(' ')} onClick={this.props.clicked}>{this.props.children}</button>
    )
  }
}

export default Button;