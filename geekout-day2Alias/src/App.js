import React from 'react';
import logo from './logo.svg';
import MyForm from './components/myForm'
import UserList from './components/list'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyForm>
          <UserList></UserList>
        </MyForm>
      </header>
    </div>
  );
}

export default App;
