import React from 'react';
import ReactDOM from 'react-dom';

class Order extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    const ingredientSummary = Object.keys(this.props.ingredients).map(e => {
      return <li key={e}><span style={{textTransform: 'capitalize'}}>{e}</span>: {this.props.ingredients[e]}</li>
    })
    return (
      <div>
        <h3>Twoje Zamówienie</h3>
        <p>Burger z następującymi składnikami:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p>Dalej?</p>
      </div>
    )
  }
}

export default Order;