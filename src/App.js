import React, { useState } from 'react';
import LeftChild from './LeftChild';
import RightChild from './RightChild';
import Data from './Data'; // Assuming data.js is in the same directory
import "./index.css";

const App = () => {
  const [selectedId, setSelectedId] = useState(3);

  const handleItemClick = (id) => {
    setSelectedId(id);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="left-child">
          <LeftChild Data={Data} onItemClick={handleItemClick} selectedId={selectedId} />
        </div>
        <h1 className='card'>Card</h1>
        <div className="right-child">
          <RightChild id={selectedId} />
        </div>
      </div>
    </div>
  );
};

export default App;