import mongoose from 'mongoose'

const batchSchema = new mongoose.Schema({
  batchName: {
    type: String,
    required: true
  },
  instituteId: {
    type: mongoose.Schema.Types.ObjectId,
    default: null
  },
  description: {
    type: String,
    default: null
  },
  batchCode: {
    type: String,
    required: true,
    unique: true
  },
  instructorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  capacity: {
    type: Number,
    default: 50
  },
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  schedule: {
    daysPerWeek: [String],
    startTime: String,
    endTime: String
  },
  modules: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Module'
  }],
  status: {
    type: String,
    enum: ['upcoming', 'active', 'completed'],
    default: 'upcoming'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true })

export default mongoose.model('Batch', batchSchema)
