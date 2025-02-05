export default function PantryTable({ items, onDelete, onEdit, statusFilter, setStatusFilter, categoryFilter, setCategoryFilter }) {
  return (
    <div className="bg-[#c8ba9f] text-white p-8 rounded-lg shadow-lg w-full">
      <h2 className="text-3xl text-[#1c1f0a] font-[family-name:var(--font-playfair-display)] mb-4 text-center">
        Pantry Items
      </h2>

      <div className="overflow-hidden rounded-lg">
        <table className="w-full border-collapse rounded-lg overflow-hidden">
          <thead>
            {/* Filters Row - Added ABOVE the Headers */}
            <tr className="bg-[#ecf794] text-[#1c1f0a]">
              <th className="p-2"></th> {/* Empty space for "Name" column */}

              {/* Status Filter Dropdown */}
              <th className="p-2">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="p-1 w-full bg-[#ecf794] text-[#1c1f0a] rounded-md border border-[#1c1f0a]"
                >
                  <option value="">All Statuses</option>
                  <option value="low">Low</option>
                  <option value="moderate">Moderate</option>
                  <option value="excess">Excess</option>
                </select>
              </th>

              {/* Category Filter Dropdown */}
              <th className="p-2">
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="p-1 w-full bg-[#ecf794] text-[#1c1f0a] rounded-md border border-[#1c1f0a]"
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

              <th className="p-2"></th> {/* Empty space for "Actions" column */}
            </tr>

            {/* Headers Row */}
            <tr className="bg-[#1c1f0a] text-white">
              <th className="p-2">Name</th>
              <th className="p-2">Status</th>
              <th className="p-2">Category</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {items.length > 0 ? (
              items.map((item, index) => (
                <tr key={index} className="bg-white text-[#1c1f0a]">
                  <td className="border border-[#1c1f0a] p-2 text-center">
                    {item.name}
                  </td>
                  <td className="border border-[#1c1f0a] p-2 text-center">
                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                  </td>
                  <td className="border border-[#1c1f0a] p-2 text-center">
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </td>
                  <td className="border border-[#1c1f0a] p-2 text-center">
                    <button
                      onClick={() => onEdit(index)}
                      className="text-[#a3c236] hover:text-[#1c1f0a] transition-all px-2"
                    >
                      Edit
                    </button>{" "}
                    |{" "}
                    <button
                      onClick={() => onDelete(index)}
                      className="text-red-500 hover:text-red-400 transition-all px-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-300">
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
