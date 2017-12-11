import React from 'react';
import ReactDOM from 'react-dom';
import Logo from '../../Logo/Logo.jsx';

class Toolbar extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <header className='toolbar'>
        <div>MENU</div>
        <Logo />
        <nav>
          ...
        </nav>
      </header>
    )
  }
}

export default Toolbar;