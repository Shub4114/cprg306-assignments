"use client"
import { useState } from "react";

export default function NewItemForm({onAddItem}) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1)
    const [category, setCategory]  = useState("produce") 
    const [eventCreated, setEventCreated] = useState(false);


    const handleNameChange = (event) => {
            setName(event.target.value)
    };

    const handleQuantityChange =(event) =>
        {setQuantity(parseInt(event.target.value))
    };
    const handleCategory =(event) =>
        {setCategory(event.target.value)
    };

    const handleSubmit = (event) =>{
        event.preventDefault();

        const id= Math.random().toString(36).substring(2,9);

        const newItem = {
          id,
          name,
          quantity,
          category,
        };

        onAddItem(newItem);
        
            setName("");
            setQuantity(1);
            setCategory("produce");

            alert("Added item:" + name +", quantity: " + quantity + ", category: "+ category);
    };

    return(
        <main className="flex justify-center w-full">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="block mb-4 text-black">
                    <input required onChange={handleNameChange} value={name} type="text" placeholder="Item Name"
                    className="mt-1 p-2 block w-full rounded-md  bg-gray-100"
                    />
                    </div>
                    <div className="flex justify-bteween text-black">
                    <input
                        required
                        min="1"
                        max="99"
                        value={quantity}  
                        onChange={handleQuantityChange}
                        type="number"
                        placeholder='Quantity'
                        className="mr-1 p-2 block w-full rounded-md  bg-gray-100"
                    />
                    <select value={category} onChange={handleCategory} className="ml-1 border-2 border-gray-100 p-2 rounded-md">
                        <option value disabled>Category</option>
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen foods">Frozen Foods</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option> 
                    </select>
                    </div >
                    <button className="mt-4 w-full py-2 px-4 bg-sky-600 hover:bg-sky-500 rounded-md text-white"
                        type="submit">
                        Add
                    </button>

                </form>
            </div>
        </main>
    )

 
}