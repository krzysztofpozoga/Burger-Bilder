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
        {controls.map(control => (
          <Control key={control.label} label={control.label} added={() => this.props.addIngredient(control.type)} removed={() => this.props.removeIngredient(control.type)}/>
        ))}
      </div>
    )
  }
}

export default BuildControls;