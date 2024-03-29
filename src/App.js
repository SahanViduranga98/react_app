import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/welcome'
import Message from './components/Message'
import React,{ Component } from 'react';
class App extends Component{
  render(){
  return (
    <div className="App">
      <Greet name="Sahan" time="afternoon">
      <p>This is children props</p>
      </Greet>
      <Greet name="Shakila" time="Morning">
        <button>Action1</button>
        </Greet>
      <Welcome name="Symonis" group="our">
      <button>Action2</button>
        </Welcome>
        <Message Welcome Visitor></Message>
    </div>
  );
}
}

export default App;
