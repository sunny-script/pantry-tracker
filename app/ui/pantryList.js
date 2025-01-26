//  # Component to display pantry items

export default function PantryList({ items, onDelete }) {
  return (
    <ul className="list-inside list-disc text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
      {items.map((item, index) => (
        <li key={index} className="mb-2">
          {item.name} - {item.category} - {item.quantity} - {item.status} - {item.lastUsed} - {item.expires}
          <button onClick={() => onDelete(index)} className="ml-2 text-red-500">Delete</button>
        </li>
      ))}
    </ul>
  );
}