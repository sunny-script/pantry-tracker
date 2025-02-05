"use client";
import { useState, useEffect } from "react";

export default function PantryItemForm({ onAddItem, editingItem }) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("low");
  const [category, setCategory] = useState("fruit");

  // Prefill form when editing
  useEffect(() => {
    if (editingItem) {
      setName(editingItem.name);
      setStatus(editingItem.status);
      setCategory(editingItem.category);
    }
  }, [editingItem]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) return; // Prevent empty input

    const newItem = { name, status, category };
    onAddItem(newItem);

    // Clear form after adding/updating item
    setName("");
    setStatus("low");
    setCategory("fruit");
  };

  return (
    <div className="bg-[#1c1f0a] min-h-screen text-[#1c1f0a]">
      <main className="flex flex-col items-center justify-center px-4 sm:px-8 pt-20">
        <div className="bg-[c8ba9f] text-white p-8 rounded-lg w-full max-w-lg">
          <h1 className="text-3xl font-[family-name:var(--font-playfair-display)] mb-4">
            {editingItem ? "Edit Pantry Item" : "Add Pantry Item"}
          </h1>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* Item Name */}
            <label className="flex flex-col">
              <span className="text-lg">Item Name</span>
              <input
                type="text"
                placeholder="Enter item name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 rounded-md border border-[#1c1f0a] text-[#1c1f0a] shadow-inner"
              />
            </label>

            {/* Status */}
            <label className="flex flex-col">
              <span className="text-lg">Status</span>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="p-2 rounded-md border border-[#1c1f0a] text-[#1c1f0a] shadow-inner"
              >
                <option value="low">Low</option>
                <option value="moderate">Moderate</option>
                <option value="excess">Excess</option>
              </select>
            </label>

            {/* Category */}
            <label className="flex flex-col">
              <span className="text-lg">Category</span>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="p-2 rounded-md border text-[#1c1f0a] shadow-inner"
              >
                <option value="baking">Baking Supplies</option>
                <option value="beverages">Beverages</option>
                <option value="breakfast">Breakfast Items</option>
                <option value="canned">Canned Goods</option>
                <option value="condiments">Condiments & Sauces</option>
                <option value="dairy">Dairy</option>
                <option value="frozen">Frozen</option>
                <option value="fruit">Fruit</option>
                <option value="grains">Grains & Pasta</option>
                <option value="herbs">Herbs & Spices</option>
                <option value="legumes">Legumes</option>
                <option value="meat">Meat & Poultry</option>
                <option value="seafood">Seafood</option>
                <option value="snacks">Snacks</option>
                <option value="vegetable">Vegetable</option>
                <option value="other">Other</option>
              </select>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#a3c236] hover:bg-[#d9f150] text-[#1c1f0a] font-semibold rounded-xl px-6 py-3 shadow-md transition-all"
            >
              {editingItem ? "Update Item" : "Add Item"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
