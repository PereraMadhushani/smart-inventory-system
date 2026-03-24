import React, { useState } from 'react';
import { useCreateCategory } from '../hooks/useApi';

export const CategoryForm = () => {
  const [formData, setFormData] = useState({ name: '', description: '' });
  const { mutate: createCategory, isLoading } = useCreateCategory();

  const handleSubmit = (e) => {
    e.preventDefault();
    createCategory(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Category Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Creating...' : 'Create Category'}
      </button>
    </form>
  );
};
