import React from 'react';
import ReactDOM from 'react-dom';

class Toolbar extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <header className='toolbar'>
        <div>MENU</div>
        <div>LOGO</div>
        <nav>
          ...
        </nav>
      </header>
    )
  }
}

export default Toolbar;