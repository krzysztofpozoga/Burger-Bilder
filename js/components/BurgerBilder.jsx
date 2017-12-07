import React from 'react';
import ReactDOM from 'react-dom';
import Burger from './Burger/Burger.jsx';
import BuildControls from './Burger/BuildControls/BuildControls.jsx'

const INGREDIENT_PRICES = {
  salad: 2,
  cheese: 3,
  meat: 5,
  bacon: 4
}

class BurgerBilder extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      totalPirce: 10
    }
  }

  addIngredient = (type) => {
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updateCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalprice: newPrice, ingredients: updatedIngredients})
  }

  removeIngredient = (type) => {
    
  }

  render(){
    return (
      <div>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls addIngredient={this.addIngredient}/>
      </div>
    );
  }
}

export default BurgerBilder;