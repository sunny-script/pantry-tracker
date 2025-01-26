'use client';

import { useState, useEffect } from 'react';
import PantryItemForm from 'app/pantryItemForm';
import PantryList from 'app/pantryList';
import { saveToLocalStorage, getFromLocalStorage } from '../lib/localStorageHelper';

export default function PantryPage() {
    const [items, setItems ] = useState([]);

    useEffect(() => {
        const storedItems = getFromLocalStorage('pantryItems');
        if (storedItems) {
            setItems(storedItems);
        }
    }, []);

    const addItem = (item) => {
        const updatedItems = [...items, item];
        setItems(updatedItems);
        saveToLocalStorage('pantryItems', updatedItems);
};

const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    saveToLocalStorage('pantryItems', updatedItems);
};

return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold">Pantry</h1>
        <PantryItemForm onAdd={addItem} />
        <PantryList items={items} onDelete={deleteItem} />
    </div>
);
}