import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Dashboard } from './pages/Dashboard';
import { ItemsPage } from './pages/ItemsPage';
import { CategoriesPage } from './pages/CategoriesPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/items" element={<ItemsPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
