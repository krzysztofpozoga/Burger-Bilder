import React from 'react';
import ReactDOM from 'react-dom';

class Order extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props.ingredients)
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
        <p>Dalej?</p>
      </div>
    )
  }
}

export default Order;