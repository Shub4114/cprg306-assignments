"use client";

import React, { useState } from 'react';
import Item from './item';
import items from './items.json';
import { Main } from 'next/document';

const ItemList = () => {
  const [sortBy, setSortBy] = useState('');

  const Items = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <main>
        <h1 className='text-xl font-extrabold text-center'>Shopping List</h1>
    <div>
      <div className=' flex justify-center'>
        <text className='font-bold p-1 m-2'>Sort By:</text>
        <button onClick={() => setSortBy('name')} className='p-1 bg-purple-400 m-2 ' >
          Sort by Name
        </button>
        <button onClick={() => setSortBy('category')} className='p-1 bg-purple-400 m-2' >
          Sort by Category
        </button>
      </div>
      <ul>
        {Items.map(item => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>
    </div>
    </main>
  );
};

export default ItemList;
