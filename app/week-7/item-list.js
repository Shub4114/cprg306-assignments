"use client";

import React, { useState } from 'react';
import Item from './item';

const ItemList = ({ items, onItemSelect }) => {
  const [sortBy, setSortBy] = useState('name');

  const Items = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
  };

  return (
    <main>
      <div>
        <div className="flex m-4">
          <text className="font-bold p-1 text-lg">Sort By:</text>
          <button onClick={() => handleSortChange('name')} className="p-2 bg-purple-400 m-2 rounded-full hover:bg-purple-600 ">
            Sort by Name
          </button>
          <button onClick={() => handleSortChange('category')} className="p-2 bg-purple-400 m-2 rounded-full ">
            Sort by Category
          </button>
        </div>
        <ul>
          {Items.map(item => (
            <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} onSelect={onItemSelect} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default ItemList;