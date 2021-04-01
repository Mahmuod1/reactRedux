import React ,{Component} from 'react'
import {Provider} from 'react-redux'
import store from './reducer'
import User from './user'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    
   <Provider store={store}>
      <div className="App">
    <User/>
    </div>
   </Provider>
  );
}

export default App;
