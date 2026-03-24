import apiClient from './axiosConfig';

// Items API
export const getItems = async () => {
  const response = await apiClient.get('/items');
  return response.data;
};

export const getItemById = async (id) => {
  const response = await apiClient.get(`/items/${id}`);
  return response.data;
};

export const createItem = async (itemData) => {
  const response = await apiClient.post('/items', itemData);
  return response.data;
};

export const updateItem = async (id, itemData) => {
  const response = await apiClient.put(`/items/${id}`, itemData);
  return response.data;
};

export const deleteItem = async (id) => {
  const response = await apiClient.delete(`/items/${id}`);
  return response.data;
};

// Categories API
export const getCategories = async () => {
  const response = await apiClient.get('/categories');
  return response.data;
};

export const createCategory = async (categoryData) => {
  const response = await apiClient.post('/categories', categoryData);
  return response.data;
};

// Transactions API
export const getTransactions = async () => {
  const response = await apiClient.get('/transactions');
  return response.data;
};

export const createTransaction = async (transactionData) => {
  const response = await apiClient.post('/transactions', transactionData);
  return response.data;
};
