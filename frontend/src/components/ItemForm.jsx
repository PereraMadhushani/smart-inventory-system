import React, { useState } from 'react';
import { useCreateItem } from '../hooks/useApi';

export const ItemForm = () => {
  const [formData, setFormData] = useState({
    sku: '',
    name: '',
    categoryId: '',
    unitOfMeasure: 'pieces',
    unitCost: 0
  });
  const { mutate: createItem, isLoading } = useCreateItem();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createItem(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="sku"
        placeholder="SKU"
        value={formData.sku}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="name"
        placeholder="Item Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="unitCost"
        placeholder="Unit Cost"
        value={formData.unitCost}
        onChange={handleChange}
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Creating...' : 'Create Item'}
      </button>
    </form>
  );
};
