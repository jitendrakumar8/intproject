import React from 'react';
import Data from "./Data";
import "./index.css";

const LeftChild = ({ data, onItemClick, selectedId }) => {
  const handleItemClick = (id) => {
    onItemClick(id);
  };

  return (
    <div className='leftitem'>
      <h1>List Of Items</h1>
      <select
        value={selectedId}
        onChange={(e) => handleItemClick(parseInt(e.target.value))}
      >
        {Data.map((item) => (
          <option key={item.id} value={item.id} placeholder='List of item'>
            {item.Name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LeftChild;