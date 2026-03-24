import React from 'react';

export const ItemList = ({ items, onSelect }) => {
  return (
    <div>
      <h2>Items List</h2>
      {items && items.length > 0 ? (
        <ul>
          {items.map((item) => (
            <li key={item._id} onClick={() => onSelect(item)}>
              <strong>{item.sku}</strong> - {item.name}
              <span>Stock: {item.currentStock}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No items found</p>
      )}
    </div>
  );
};
