'use client';
import React, { useState } from 'react';
import ItemList from "./item-list.js";
import NewItemForm from "./new-item.js";
import itemsData from "./items.json";

export default function Page(){
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems( [...items, newItem]);
    };
    return(
    <main>
        <h1 className='text-4xl font-bold text-center m-4'>Shopping List</h1>
        <div>
            <NewItemForm onAddItem={handleAddItem} className="" />
            <ItemList items={items} />  
        </div>   
    </main>) 
};
        