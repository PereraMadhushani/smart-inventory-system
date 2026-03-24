const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item',
    required: true
  },
  transactionType: {
    type: String,
    enum: ['inbound', 'outbound', 'adjustment', 'transfer'],
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  fromLocationId: mongoose.Schema.Types.ObjectId,
  toLocationId: mongoose.Schema.Types.ObjectId,
  referenceNumber: String,
  remarks: String,
  transactionDate: {
    type: Date,
    default: Date.now
  },
  createdBy: mongoose.Schema.Types.ObjectId,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Transaction', transactionSchema);
