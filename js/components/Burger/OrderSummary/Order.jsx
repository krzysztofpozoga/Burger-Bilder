import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../../UI/Button/Button.jsx';


class Order extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    const labels = ['Sałata', 'Bekon', 'Ser', 'Mięso'];
    const ingredientSummary = Object.keys(this.props.ingredients).map((e, i) => {
      return <li key={e}><span style={{textTransform: 'capitalize'}}>{labels[i]}</span>: {this.props.ingredients[e]}</li>
    })
    return (
      <div>
        <h3>Twoje Zamówienie</h3>
        <p>Burger z następującymi składnikami:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p>Jesteś pewien?</p>
        <Button btnType='danger' clicked={this.props.purchaseCanceled}>ANULUJ</Button>
        <Button btnType='success' clicked={this.props.purchaseContinued}>DALEJ</Button>
      </div>
    )
  }
}

export default Order;