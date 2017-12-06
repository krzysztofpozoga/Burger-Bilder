import React from 'react';
import ReactDOM from 'react-dom';
import Ingredient from './Ingredient/Ingredient.jsx'

class Burger extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
    <div className='burger'>
      <Ingredient type="bread-top" />
      <Ingredient type="cheese" />
      <Ingredient type="meat" />
      <Ingredient type="bread-bottom" />
    </div>
    )
  }
}

export default Burger;