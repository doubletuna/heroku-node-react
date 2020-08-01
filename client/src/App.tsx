import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState('')

  useEffect(() => {
    fetch("/api/example").then(res => res.json()).then(data => setData(data.message))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>{data}</h1>
        <h3><a className="App-link" href="https://github.com/doubletuna/heroku-node-react" rel="noopener noreferrer" target="_blank">heroku-node-react example</a></h3>
      </header>
    </div>
  );
}

export default App;
