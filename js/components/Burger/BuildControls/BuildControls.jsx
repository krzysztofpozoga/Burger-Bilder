import React from 'react';
import ReactDOM from 'react-dom';
import Control from './Control.jsx'


class BuildControls extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    const controls = [
      { label: 'Sałata', type: 'salad'},
      { label: 'Bekon', type: 'bacon'},
      { label: 'Ser', type: 'cheese'},
      { label: 'Mięso', type: 'meat'}
    ]
    return (
      <div className='buildControls'>
        <p>Cena: <strong>{this.props.price.toFixed(2)}</strong></p>
        {controls.map(control => (
          <Control key={control.label} label={control.label} added={() => this.props.addIngredient(control.type)} removed={() => this.props.removeIngredient(control.type)} disabled={this.props.disabled[control.type]}/>
        ))}
        <button className='orderButton'>ZAMÓW TERAZ</button>
      </div>
    )
  }
}

export default BuildControls;