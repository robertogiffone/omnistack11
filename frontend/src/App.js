import React, { Component } from 'react';

import './global.css';

//import Header from './Header'; 
//import Logon from './pages/Logon'; 

import Routes from './routes';

class App extends Component {
    
  render() {
    
    /*const [counter, setCounter] = useState(0);

    function increment()
    {
      setCounter(counter+1);
    }*/

    /*
      <div>
      <Header>
        Contador: {counter}
      </Header>
      <button onClick={increment}>Incrementar</button>
      </div>
    */

    return (
      <Routes />
    );
  }
}

export default App;
