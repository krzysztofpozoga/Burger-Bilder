import React from 'react';
import ReactDOM from 'react-dom';
import Burger from './Burger/Burger.jsx';
import BuildControls from './Burger/BuildControls/BuildControls.jsx';
import Modal from './UI/Modal/Modal.jsx';
import Order from './Burger/OrderSummary/Order.jsx';
import config from '../firebase.jsx';
import Spinner from './UI/Spinner/Spinner.jsx';

const INGREDIENT_PRICES = {
  salad: 2.50,
  cheese: 3,
  meat: 5,
  bacon: 4.50
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
      purchasable: false,
      purchasing: false,
      loading: false
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

  purchaseHandler = () => {
    this.setState({purchasing: true});
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  }

  purchaseContinueHandler = () => {
    this.setState({loading: true})
  //  alert('Zamówione!');
    const object = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Krzysiek",
        address: {
          street: "ul. AAAA",
          postCode: "123-456",
          city: "Warszawa"
        },
        email: "test@test.com"
      },
      delivery: "Szybko"
    };
    fetch(`${config.databaseURL}/orders.json`,	{
      method:	'POST',
      body:	JSON.stringify(	object	)
    })
    .then(response => {
      this.setState({loading: false, purchasing: false})
    })
    .catch(error => {
      this.setState({loading: false, purchasing: false})
    });
  }

  render(){
    const disabledInfo = {
      ...this.state.ingredients
    };
    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    } // checks if there are ingredients ({salad: true, meat: false, ...})
    let orderSummary = <Order ingredients={this.state.ingredients} purchaseCanceled={this.purchaseCancelHandler} purchaseContinued={this.purchaseContinueHandler} price={this.state.totalPrice}/>
    if(this.state.loading) {
      orderSummary = <Spinner />
    }
    return (
      <div>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls addIngredient={this.addIngredient} removeIngredient={this.removeIngredient} disabled={disabledInfo} price={this.state.totalPrice} purchasable={this.state.purchasable} ordered={this.purchaseHandler}/>
      </div>
    );
  }
}

export default BurgerBilder;