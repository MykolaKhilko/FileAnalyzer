import React from 'react';

const createProcess = (newProcess) => {
    setProcess([...process, newProcess])
    setModal(false)
}

function App() {
  return (
    <div className="App">
        <button className="newProcess" onClick={create}></button>
    </div>
  );
}

export default App;
