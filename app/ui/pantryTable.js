export default function PantryTable({ items, onDelete, onEdit, statusFilter, setStatusFilter, categoryFilter, setCategoryFilter }) {
  return (
    <div className="bg-[#c8ba9f] text-white p-8 rounded-xl shadow-xl w-full">
      <h2 className="text-3xl text-[#1c1f0a] font-[family-name:var(--font-playfair-display)] mb-6 text-center">
        Pantry Items
      </h2>

      <div className="overflow-hidden rounded-xl shadow-lg">
        <table className="w-full border-collapse rounded-xl overflow-hidden bg-[#f7f4e9]">
          <thead>
            {/* Filters Row */}
            <tr className="bg-[#ecf794] text-[#1c1f0a]">
              <th className="p-3"></th> {/* Empty space for "Name" column */}

              {/* Status Filter */}
              <th className="p-3">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="p-2 w-full bg-[#ecf794] text-[#1c1f0a] rounded-lg border border-[#c8ba9f] shadow-md"
                >
                  <option value="">All Statuses</option>
                  <option value="low">Low</option>
                  <option value="moderate">Moderate</option>
                  <option value="excess">Excess</option>
                </select>
              </th>

              {/* Category Filter */}
              <th className="p-3">
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="p-2 w-full bg-[#ecf794] text-[#1c1f0a] rounded-lg border border-[#c8ba9f] shadow-md"
                >
                  <option value="">All Categories</option>
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
              </th>

              <th className="p-3"></th> {/* Empty space for "Actions" column */}
            </tr>

            {/* Headers Row */}
            <tr className="bg-[#1c1f0a] text-white text-lg">
              <th className="p-4">Name</th>
              <th className="p-4">Status</th>
              <th className="p-4">Category</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {items.length > 0 ? (
              items.map((item, index) => (
                <tr
                  key={index}
                  className={`transition-all ${
                    index % 2 === 0 ? "bg-[#fcf8e8]" : "bg-[#f0e4c5]"
                  } text-[#1c1f0a] hover:bg-[#e3d4aa]`}
                >
                  <td className="p-4 text-center border-b border-[#c8ba9f] rounded-l-xl">
                    {item.name}
                  </td>
                  <td className="p-4 text-center border-b border-[#c8ba9f]">
                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                  </td>
                  <td className="p-4 text-center border-b border-[#c8ba9f]">
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </td>
                  <td className="p-4 text-center border-b border-[#c8ba9f] rounded-r-xl">
                    <button
                      onClick={() => onEdit(index)}
                      className="px-3 py-1 rounded-lg bg-[#a3c236] hover:bg-[#8aa22d] text-white transition-all"
                    >
                      Edit
                    </button>{" "}
                    {" "}
                    <button
                      onClick={() => onDelete(index)}
                      className="px-3 py-1 rounded-lg bg-red-500 hover:bg-red-400 text-white transition-all"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-500 italic">
                  No pantry items yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
