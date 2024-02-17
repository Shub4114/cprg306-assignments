import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <div className="text-white p-2 bg-auto m-4 max-w-sm bg-gray-800">
      <p className="text-lg font-bold">{name}</p>
      <p className="text-sm">Quantity: {quantity}</p>
      <p className="text-sm">Category: {category}</p>
    </div>
  );
};

export default Item;