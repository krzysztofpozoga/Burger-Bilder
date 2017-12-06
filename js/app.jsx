import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout.jsx';
import BurgerBilder from './components/BurgerBilder.jsx';

class App extends React.Component {
  render(){
    return (
      <div>
        <Layout>
          <BurgerBilder />
        </Layout>
      </div>
    )
  }
}

export default App;