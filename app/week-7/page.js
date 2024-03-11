'use client';
import React, { useState } from 'react';
import ItemList from "./item-list.js";
import NewItemForm from "./new-item.js";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas.js";

export default function Page(){
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState('');

    function handleItemSelect(item) {
        const cleanedItemName = item.name
          .split(',')[0] // Remove the size
          .replace(/[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2580-\u27BF]|\uD83E[\uDD10-\uDDFF]/g, '') // Remove the emoji
          .trim();
        setSelectedItemName(cleanedItemName);
      }

    const handleAddItem = (newItem) => {
        setItems( [...items, newItem]);
    };
    return(
    <main>
        <h1 className=' text-4xl font-bold text-center m-4'>Shopping List</h1>
        <div className='flex flex-row'>
            <ul><NewItemForm onAddItem={handleAddItem} className="" />
            <ItemList items={items} onItemSelect={handleItemSelect} />
            </ul>
            <ul>
            <h2 className='font-bold'>Meal Ideas:</h2> 
            {selectedItemName && <MealIdeas ingredient={selectedItemName} />} </ul> 
            </div>
            
    </main>); 
};
        