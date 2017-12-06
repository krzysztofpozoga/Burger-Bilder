import React from 'react';
import ReactDOM from 'react-dom';
import Burger from './Burger/Burger.jsx'

class BurgerBilder extends React.Component {
  render(){
    return (
      <div>
        <Burger />
        <div>Build Controls</div>
      </div>
    );
  }
}

export default BurgerBilder;