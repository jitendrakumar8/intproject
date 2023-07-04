import React from 'react';
import Data from "./Data";
import "./index.css";
const RightChild = ({ id }) => {
  // Assuming Data is available here
  const item = Data.find((item) => item.id === id);

  return (
  
    
    <div className='rightitem'>
      {item ? (
        <div>
          <p className='name'> {item.Name}</p>
          <p className='price'>Price:Rs. {item.Price}</p>
          <p className='itemid'>Item Id : {item.id}</p>
        </div>
      ) : (
        <p>No item found.</p>
      )}
    </div>
  
  );
};

export default RightChild;