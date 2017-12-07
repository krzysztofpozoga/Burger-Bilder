import React from 'react';
import ReactDOM from 'react-dom';
import Burger from './Burger/Burger.jsx';
import BuildControls from './Burger/BuildControls/BuildControls.jsx'

class BurgerBilder extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      }
    }
  }

  render(){
    return (
      <div>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls />
      </div>
    );
  }
}

export default BurgerBilder;