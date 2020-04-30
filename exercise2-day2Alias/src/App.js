import React from 'react';
import './App.css';
import Alive from './components/myComponents'
import Checkbox from './components/parent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Checkbox>
          <Alive></Alive>
        </Checkbox>
      </header>
    </div>
  );
}

export default App;

