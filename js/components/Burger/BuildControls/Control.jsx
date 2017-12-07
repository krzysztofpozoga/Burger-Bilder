import React from 'react';
import ReactDOM from 'react-dom';

class Control extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className='control'>
        <div className='label'>{this.props.label}</div>
        <button className='more' onClick={this.props.added}>Więcej!</button>
        <button className='less'>Mniej!</button>
      </div>
    )
  }
}

export default Control;