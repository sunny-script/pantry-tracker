import Header from "./header";

export default function PantryItemForm() {
  return (
    <div className="bg-[#ecf794] min-h-screen text-[#1c1f0a]">

      {/* Form Section */}
      <main className="flex flex-col items-center justify-center px-4 sm:px-8 pt-20">
        <div className="bg-black bg-opacity-60 text-white p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h1 className="text-3xl font-[family-name:var(--font-playfair-display)] mb-4">
            Add Pantry Item
          </h1>
          <form className="flex flex-col gap-4">
            {/* Item Name */}
            <label className="flex flex-col">
              <span className="text-lg">Item Name</span>
              <input
                type="text"
                placeholder="Enter item name"
                className="p-2 rounded-md border border-[#1c1f0a] text-[#1c1f0a] shadow-inner"
              />
            </label>

            {/* Status */}
            <label className="flex flex-col">
              <span className="text-lg">Status</span>
              <select className="p-2 rounded-md border border-[#1c1f0a] text-[#1c1f0a] shadow-inner">
                <option value="low">Low</option>
                <option value="moderate">Moderate</option>
                <option value="excess">Excess</option>
              </select>
            </label>

            {/* Category */}
            <label className="flex flex-col">
              <span className="text-lg">Category</span>
              <select className="p-2 rounded-md border border-[#1c1f0a] text-[#1c1f0a] shadow-inner">
                <option value="fruit">Fruit</option>
                <option value="vegetable">Vegetable</option>
                <option value="canned">Canned</option>
                <option value="grains">Grains</option>
                <option value="other">Other</option>
              </select>
            </label>
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#a3c236] hover:bg-[#d9f150] text-[#1c1f0a] font-semibold rounded-xl px-6 py-3 shadow-md transition-all"
            >
              Add Item
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

