const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
    minlength: [3, 'Product name must be at least 3 characters'],
    maxlength: [150, 'Product name cannot exceed 150 characters']
  },

  sku: {
    type: String,
    required: [true, 'SKU is required'],
    unique: true,
    trim: true,
    uppercase: true,
    match: [
      /^[A-Z0-9\-]{3,50}$/,
      'SKU must contain only uppercase letters, numbers, and hyphens (3-50 characters)'
    ]
  },

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: [true, 'Category is required']
  },

  price: {
    type: mongoose.Decimal128,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative'],
    set: (value) => {
      return mongoose.Types.Decimal128.fromString(value.toString());
    }
  },

  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
    default: 0,
    min: [0, 'Quantity cannot be negative'],
    validate: {
      validator: Number.isInteger,
      message: 'Quantity must be a whole number'
    }
  },

  status: {
    type: String,
    enum: ['In Stock', 'Low Stock', 'Out of Stock'],
    default: 'In Stock'
  },

  description: {
    type: String,
    trim: true,
    maxlength: [500, 'Description cannot exceed 500 characters']
  },

  isActive: {
    type: Boolean,
    default: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  },

  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Create index for SKU for fast lookups
productSchema.index({ sku: 1 });
productSchema.index({ category: 1 });
productSchema.index({ status: 1 });

// Pre-save hook: Automatically update status based on quantity
productSchema.pre('save', function(next) {
  // If quantity is less than 10, set status to 'Low Stock'
  if (this.quantity < 10) {
    this.status = 'Low Stock';
  }
  // If quantity is 0, set status to 'Out of Stock'
  else if (this.quantity === 0) {
    this.status = 'Out of Stock';
  }
  // Otherwise, set to 'In Stock'
  else {
    this.status = 'In Stock';
  }

  // Update the updatedAt timestamp
  this.updatedAt = Date.now();

  next();
});

// Instance method to get price as a regular number
productSchema.methods.getPriceAsNumber = function() {
  return this.price.toString();
};

// Instance method to check if product is low on stock
productSchema.methods.isLowOnStock = function() {
  return this.quantity < 10;
};

// Static method to get products by status
productSchema.statics.getByStatus = function(status) {
  return this.find({ status, isActive: true });
};

// Static method to get low stock products
productSchema.statics.getLowStockProducts = function() {
  return this.find({ status: 'Low Stock', isActive: true });
};

// Virtual for stock level description
productSchema.virtual('stockLevelDescription').get(function() {
  if (this.quantity === 0) return 'Out of Stock';
  if (this.quantity < 10) return `Only ${this.quantity} left in stock`;
  return `${this.quantity} units available`;
});

module.exports = mongoose.model('Product', productSchema);