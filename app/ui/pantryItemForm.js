// Form component for adding/editing items

import { useState } from "react";

export default function PantryItemForm({ onAdd }) {
    const [form, setForm] = useState({
        name: "",
        category: "",
        quantity: "",
        status: "",
        lastUsed: "",
        Expires: "",
    });

const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm({
        name: "",
        category: "",
        quantity: "",
        status: "",
        lastUsed: "",
        Expires: "",
    });
};

return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
            type="text"
            placeholder="Item name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
            type="text"
            placeholder="How would you categorize this item?"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
        />
        <input
            type="text"
            placeholder="How many of this item do you have on hand"
            value={form.quantity}
            onChange={(e) => setForm({ ...form, quantity: e.target.value })}
        />
        <input
            type="text"
            placeholder="Do you need to buy more of this item?"
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
        />
        <input
            type="text"
            placeholder="Last time you used this item?"
            value={form.lastUsed}
            onChange={(e) => setForm({ ...form, lastUsed: e.target.value })}
        />
        <input
            type="text"
            placeholder="Last but not least, expiration date?"
            value={form.Expires}
            onChange={(e) => setForm({ ...form, Expires: e.target.value })}
        />
        <button type="submit">Add Item to your virtual shelf</button>
    </form>
);      
}