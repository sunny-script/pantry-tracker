export default function PantryTable({ items, onDelete, onUpdate }) {
  
  return (
    <div className="bg-white text-[#1c1f0a] p-6 rounded-lg shadow-lg">

      <h2 className="text-xl font-[family-name:var(--font-playfair-display)] mb-4">
        Pantry Items
      </h2>
      <table className="w-full border-collapse border border-[#1c1f0a]">
        <thead>
          <tr className="bg-[#a3c236] text-[#1c1f0a]">
            <th className="border border-[#1c1f0a] p-2">Name</th>
            <th className="border border-[#1c1f0a] p-2">Status</th>
            <th className="border border-[#1c1f0a] p-2">Category</th>
            <th className="border border-[#1c1f0a] p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="border border-[#1c1f0a] p-2">{item.name}</td>
              <td className="border border-[#1c1f0a] p-2">{item.status}</td>
              <td className="border border-[#1c1f0a] p-2">{item.category}</td>
              <td className="border border-[#1c1f0a] p-2">
                <button
                  onClick={() => onUpdate(index)}
                  className="text-blue-500 hover:underline"
                >
                  Edit
                </button>{" "}
                |{" "}
                <button
                  onClick={() => onDelete(index)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
