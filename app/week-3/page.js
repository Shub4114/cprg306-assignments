    import React from "react";
    import ItemList from './item-list';

    export default function Page() {
        return (
        <main>
            <h1 className="text-center  text-4xl font-extrabold">Shopping List</h1>
            <div>
                <ItemList />
            </div> 
        </main>
        );
    };