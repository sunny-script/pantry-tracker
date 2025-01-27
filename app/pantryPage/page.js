"use client";

import Header from "../ui/header";
import PantryItemForm from "../ui/pantryItemForm";
import PantryTable from "../ui/pantryTable";
import { useState } from "react";

export default function PantryPage() {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleDeleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleUpdateItem = (index) => {
    // Add update logic here
    alert("Edit functionality coming soon!");
  };

  return (
    <div className="bg-[#ecf794] min-h-screen text-[#1c1f0a]">
      <Header />
      <div className="flex flex-row gap-6 p-6 pt-24 items-start">
        {/* Left: Form */}
        <div className="w-1/3">
          <PantryItemForm onAddItem={handleAddItem} />
        </div>

        {/* Right: Table */}
        <div className="w-2/3">
          <PantryTable
            items={items}
            onDelete={handleDeleteItem}
            onUpdate={handleUpdateItem}
          />
        </div>
      </div>
    </div>
  );
}
