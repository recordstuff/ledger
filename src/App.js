import React from 'react';
import './App.css';
import Ledger from './Ledger/index.js';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Perficient National Bank</h1>
      </header>
      <Ledger />
    </div>
  );
}

export default App;
