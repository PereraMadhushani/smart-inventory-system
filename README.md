# Smart Inventory Management System - MERN Stack

Professional MERN (MongoDB, Express, React, Node.js) stack implementation for a Smart Inventory Management System.

## Project Structure

### Backend
```
backend/
├── models/          # Mongoose schemas (Item, Category, Transaction, User)
├── controllers/     # Business logic controllers
├── routes/          # API routes
├── middleware/      # Custom middleware (auth, error handling)
├── config/          # Configuration files
├── utils/           # Utility functions
├── server.js        # Express server entry point
└── package.json
```

### Frontend
```
frontend/
├── src/
│   ├── components/  # React components (ItemForm, ItemList, CategoryForm)
│   ├── pages/       # Page components (Dashboard, ItemsPage, CategoriesPage)
│   ├── hooks/       # Custom React hooks (useApi, useQuery hooks)
│   ├── services/    # API services & axios configuration
│   ├── context/     # State management (Zustand stores)
│   ├── utils/       # Helper functions
│   ├── assets/      # Static assets
│   ├── App.jsx      # Root component
│   └── index.js     # React DOM render
├── public/
└── package.json
```

## Features

✅ **Inventory Management**
- Product/Item management (CRUD operations)
- Category management
- Stock level tracking

✅ **Transaction Tracking**
- Inbound/Outbound transactions
- Stock adjustments
- Transfer between locations

✅ **User Authentication**
- Role-based access (admin, manager, operator)
- JWT-based authentication
- Password hashing with bcryptjs

✅ **Technology Stack**
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Frontend**: React, React Router, React Query, Zustand
- **UI**: Material-UI, Custom CSS
- **State Management**: Zustand for global state
- **HTTP Client**: Axios

## Getting Started

### Backend Setup

1. Navigate to backend folder:
   ```bash
   cd backend
   npm install
   ```

2. Create `.env` file (copy from `.env.example`):
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   JWT_SECRET=your_secret_key
   CORS_ORIGIN=http://localhost:3000
   ```

3. Start the server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to frontend folder:
   ```bash
   cd frontend
   npm install
   ```

2. Create `.env` file:
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`

## Database Schema

### Collections

- **Categories**: Product categories
- **Items**: Products with SKU, name, cost, stock levels
- **Transactions**: Stock movement records
- **Users**: User accounts with roles and authentication
- **Stock Levels**: Inventory by location (optional)
- **Batches**: Lot tracking for expiry management (optional)

## API Endpoints (To be implemented)

```
POST   /api/items          - Create item
GET    /api/items          - Get all items
GET    /api/items/:id      - Get item by ID
PUT    /api/items/:id      - Update item
DELETE /api/items/:id      - Delete item

POST   /api/categories     - Create category
GET    /api/categories     - Get all categories

POST   /api/transactions   - Record transaction
GET    /api/transactions   - Get transaction history
```

## Next Steps

1. **Implement Controllers**: Add business logic in `backend/controllers/`
2. **Create Routes**: Build API routes in `backend/routes/`
3. **Complete Components**: Develop React components with Material-UI
4. **Authentication**: Implement login/register pages
5. **Dashboard**: Create analytics and reporting dashboard
6. **Testing**: Add unit and integration tests

## Notes

- Both backend and frontend have example `.env` files
- Models are pre-configured with validation
- Middleware structure is ready for expansion
- React Query is configured for efficient data fetching
- Zustand stores provide lightweight state management

For detailed documentation, refer to individual folder README files (to be created).
