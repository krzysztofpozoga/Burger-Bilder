import React from 'react';
import ReactDOM from 'react-dom';


class Logo extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
    <div className='logo'>
      <img src='../../images/burger-logo.png' alt='MyBurger' />
    </div>
    )
  }
}

export default Logo;