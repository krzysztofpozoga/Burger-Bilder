import React from 'react';
import ReactDOM from 'react-dom';
import Burger from './Burger/Burger.jsx';
import BuildControls from './Burger/BuildControls/BuildControls.jsx';
import Modal from './UI/Modal/Modal.jsx';
import Order from './Burger/OrderSummary/Order.jsx';

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
      totalPrice: 10,
      purchasable: false
    }
  }

  updatePurchaseState(ingredients){
    const sum = Object.keys(ingredients).map(e => {
      return ingredients[e];
    }).reduce((sume, el) => {
      return sume + el
    }, 0);
    this.setState({purchasable: sum > 0});
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
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredient = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount<=0) {
      return
    }
    const updateCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updateCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  }

  render(){
    const disabledInfo = {
      ...this.state.ingredients
    };
    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    } // checks if there are ingredients ({salad: true, meat: false, ...})
    return (
      <div>
        <Modal>
          <Order ingredients={this.state.ingredients}/>
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls addIngredient={this.addIngredient} removeIngredient={this.removeIngredient} disabled={disabledInfo} price={this.state.totalPrice} purchasable={this.state.purchasable}/>
      </div>
    );
  }
}

export default BurgerBilder;