import { useQuery, useMutation, useQueryClient } from 'react-query';
import * as api from './api';

// Items Hooks
export const useGetItems = () => {
  return useQuery('items', api.getItems);
};

export const useGetItemById = (id) => {
  return useQuery(['item', id], () => api.getItemById(id), {
    enabled: !!id
  });
};

export const useCreateItem = () => {
  const queryClient = useQueryClient();
  return useMutation(api.createItem, {
    onSuccess: () => queryClient.invalidateQueries('items')
  });
};

export const useUpdateItem = () => {
  const queryClient = useQueryClient();
  return useMutation(({ id, data }) => api.updateItem(id, data), {
    onSuccess: () => queryClient.invalidateQueries('items')
  });
};

export const useDeleteItem = () => {
  const queryClient = useQueryClient();
  return useMutation(api.deleteItem, {
    onSuccess: () => queryClient.invalidateQueries('items')
  });
};

// Categories Hooks
export const useGetCategories = () => {
  return useQuery('categories', api.getCategories);
};

export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation(api.createCategory, {
    onSuccess: () => queryClient.invalidateQueries('categories')
  });
};

// Transactions Hooks
export const useGetTransactions = () => {
  return useQuery('transactions', api.getTransactions);
};

export const useCreateTransaction = () => {
  const queryClient = useQueryClient();
  return useMutation(api.createTransaction, {
    onSuccess: () => queryClient.invalidateQueries('transactions')
  });
};
