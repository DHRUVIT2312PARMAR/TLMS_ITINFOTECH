import mongoose from 'mongoose'

const testResultSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  moduleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Module',
    required: true
  },
  wpm: {
    type: Number,
    required: true
  },
  grossWPM: {
    type: Number,
    required: true
  },
  netWPM: {
    type: Number,
    required: true
  },
  accuracy: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  totalCharacters: {
    type: Number,
    required: true
  },
  correctCharacters: {
    type: Number,
    required: true
  },
  errorCount: {
    type: Number,
    default: 0
  },
  backspaceCount: {
    type: Number,
    default: 0
  },
  duration: {
    type: Number,
    required: true
  },
  testType: {
    type: String,
    enum: ['practice', 'assessment', 'challenge'],
    default: 'practice'
  },
  passed: {
    type: Boolean,
    default: false
  },
  xpEarned: {
    type: Number,
    default: 0
  },
  coinsEarned: {
    type: Number,
    default: 0
  },
  testContent: {
    type: String,
    default: null
  },
  userInput: {
    type: String,
    default: null
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true })

export default mongoose.model('TestResult', testResultSchema)
