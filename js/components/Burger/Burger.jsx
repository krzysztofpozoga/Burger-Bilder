import React from 'react';
import ReactDOM from 'react-dom';
import Ingredient from './Ingredient/Ingredient.jsx'

class Burger extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    const transformedIngredients = Object.keys(this.props.ingredients).map(e => { 
      return [...Array(this.props.ingredients[e])].map((_, i)=> {
        return <Ingredient key={e+i} type={e} />
      })
    }); //transformation an object of key value pairs into an array of burger ingredients
    return (
    <div className='burger'>
      <Ingredient type="bread-top" />
      {transformedIngredients}
      <Ingredient type="bread-bottom" />
    </div>
    )
  }
}

export default Burger;