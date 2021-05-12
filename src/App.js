import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/common/header/header';

function App() {
  return (
    <div>
      <div className="container">
        <p>Welcome to MrDrDocs!</p>
      </div>
      <div className="container">
        <Header></Header>
      </div>
    </div>

  );
}

export default App;
