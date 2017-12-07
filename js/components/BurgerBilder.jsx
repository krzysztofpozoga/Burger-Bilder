import React from 'react';
import ReactDOM from 'react-dom';
import Burger from './Burger/Burger.jsx'

class BurgerBilder extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ingredients: {
        salad: 1,
        bacon: 1,
        cheese: 2,
        meat: 2
      }
    }
  }

  render(){
    return (
      <div>
        <Burger ingredients={this.state.ingredients}/>
        <div>Build Controls</div>
      </div>
    );
  }
}

export default BurgerBilder;