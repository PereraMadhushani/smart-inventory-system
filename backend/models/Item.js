const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  sku: {
    type: String,
    required: [true, 'SKU is required'],
    unique: true,
    trim: true
  },
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  description: String,
  unitOfMeasure: {
    type: String,
    default: 'pieces'
  },
  reorderLevel: {
    type: Number,
    default: 10
  },
  reorderQuantity: {
    type: Number,
    default: 50
  },
  unitCost: {
    type: mongoose.Decimal128,
    default: 0
  },
  currentStock: {
    type: Number,
    default: 0
  },
  barcode: String,
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

module.exports = mongoose.model('Item', itemSchema);
