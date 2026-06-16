import mongoose from 'mongoose'

const moduleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: '📚'
  },
  order: {
    type: Number,
    required: true
  },
  difficulty: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    default: 'beginner'
  },
  topics: [{
    title: String,
    content: String,
    subtopics: [String]
  }],
  passingCriteria: {
    minWPM: Number,
    minAccuracy: Number,
    requiredCompletions: Number
  },
  certificateCode: {
    type: String,
    required: true,
    unique: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true })

export default mongoose.model('Module', moduleSchema)
