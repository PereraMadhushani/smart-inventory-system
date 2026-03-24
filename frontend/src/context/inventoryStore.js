import create from 'zustand';

const useInventoryStore = create((set) => ({
  items: [],
  categories: [],
  selectedItem: null,
  filters: {
    category: '',
    searchTerm: ''
  },

  setItems: (items) => set({ items }),
  setCategories: (categories) => set({ categories }),
  setSelectedItem: (item) => set({ selectedItem: item }),
  setFilters: (filters) => set((state) => ({
    filters: { ...state.filters, ...filters }
  }))
}));

export default useInventoryStore;
