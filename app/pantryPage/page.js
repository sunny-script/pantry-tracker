"use client";

import Header from "../ui/header";
import PantryItemForm from "../ui/pantryItemForm";
import PantryTable from "../ui/pantryTable";
import { useState, useEffect } from "react";

export default function PantryPage() {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // Search filter
  const [statusFilter, setStatusFilter] = useState(""); // Status filter
  const [categoryFilter, setCategoryFilter] = useState(""); // Category filter

  // Load items from localStorage on page load
  useEffect(() => {
    const storedItems = localStorage.getItem("pantryItems");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  const saveItemsToLocalStorage = (updatedItems) => {
    localStorage.setItem("pantryItems", JSON.stringify(updatedItems));
  };

  const handleAddItem = (item) => {
    if (editingItem !== null) {
      const updatedItems = items.map((it, index) =>
        index === editingItem ? item : it
      );
      setItems(updatedItems);
      saveItemsToLocalStorage(updatedItems);
      setEditingItem(null);
    } else {
      const updatedItems = [...items, item];
      setItems(updatedItems);
      saveItemsToLocalStorage(updatedItems);
    }
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    saveItemsToLocalStorage(updatedItems);
  };

  const handleEditItem = (index) => {
    setEditingItem(index);
  };

  // **Filter items based on search, status, and category**
  const filteredItems = items.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (statusFilter === "" || item.status === statusFilter) &&
      (categoryFilter === "" || item.category === categoryFilter)
    );
  });

  return (
    <div className="bg-[#1c1f0a] min-h-screen text-[#1c1f0a]">
      {/* Header at the top */}
      <Header />

      {/* Main Content Layout */}
      <div className="flex flex-row justify-between p-6 pt-32">
        {/* Left Column: Pantry Item Form (Placed lower on the page) */}
        <div className="w-1/3 mt-10">
          <PantryItemForm
            onAddItem={handleAddItem}
            editingItem={editingItem !== null ? items[editingItem] : null}
          />
        </div>

        {/* Right Column: Pantry Items Table */}
        <div className="w-2/3">
          {/* Search bar above the table, aligned to the right */}
          <div className="flex justify-end mb-4">
            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-2 rounded-md border text-[#1c1f0a] shadow-inner w-1/3"
            />
          </div>

          {/* Pantry Items Table */}
          <PantryTable
            items={filteredItems}
            onDelete={handleDeleteItem}
            onEdit={handleEditItem}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
          />
        </div>
      </div>
    </div>
  );
}
