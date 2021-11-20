import React from 'react';
import './App.css';
import Form from './components/Form';

const App = () => {
  return (
    <div className="App">
      <header className="App-content">
        <p>
          Aquí haremos nuestro TO-DO list
        </p>
        <Form/>
      </header>
    </div>
  );
}

export default App;
