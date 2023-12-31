import { useState } from 'react';

import './App.css';

function App() {
  return (
    <>
      <h1>Git rebase practice</h1>
      <div className="card">
        <p>Adds new button</p>
        <button style={{ backgroundColor: 'gold', marginRight: '5px' }}>
          New Button
        </button>
        <button style={{ backgroundColor: 'red' }}>
          Adds Button in GitHub
        </button>
      </div>
    </>
  );
}

export default App;
