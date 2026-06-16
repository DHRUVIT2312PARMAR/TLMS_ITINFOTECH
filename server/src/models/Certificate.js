import mongoose from 'mongoose'

const certificateSchema = new mongoose.Schema({
  certificateId: {
    type: String,
    required: true,
    unique: true
  },
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
  moduleName: {
    type: String,
    required: true
  },
  studentName: {
    type: String,
    required: true
  },
  studentEmail: {
    type: String,
    required: true
  },
  studentPhoto: {
    type: String,
    default: null
  },
  issuedDate: {
    type: Date,
    default: Date.now
  },
  expiryDate: {
    type: Date,
    default: null
  },
  directorSignature: {
    type: String,
    default: null
  },
  instructorSignature: {
    type: String,
    default: null
  },
  instructorName: {
    type: String,
    default: null
  },
  qrCode: {
    type: String,
    default: null
  },
  verificationCode: {
    type: String,
    unique: true,
    required: true
  },
  status: {
    type: String,
    enum: ['valid', 'revoked', 'expired'],
    default: 'valid'
  },
  certificateUrl: {
    type: String,
    default: null
  },
  metrics: {
    finalWPM: Number,
    finalAccuracy: Number,
    bestWPM: Number,
    totalTests: Number
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true })

export default mongoose.model('Certificate', certificateSchema)
