import mongoose from 'mongoose'

const leaderboardSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  userName: {
    type: String,
    required: true
  },
  userEmail: {
    type: String,
    required: true
  },
  globalRank: {
    type: Number,
    default: null
  },
  weeklyRank: {
    type: Number,
    default: null
  },
  speedRank: {
    type: Number,
    default: null
  },
  totalXP: {
    type: Number,
    default: 0
  },
  totalTests: {
    type: Number,
    default: 0
  },
  averageWPM: {
    type: Number,
    default: 0
  },
  bestWPM: {
    type: Number,
    default: 0
  },
  averageAccuracy: {
    type: Number,
    default: 0
  },
  bestAccuracy: {
    type: Number,
    default: 0
  },
  totalCertificates: {
    type: Number,
    default: 0
  },
  totalBadges: {
    type: Number,
    default: 0
  },
  weeklyXP: {
    type: Number,
    default: 0
  },
  weeklyTests: {
    type: Number,
    default: 0
  },
  weeklyAverageWPM: {
    type: Number,
    default: 0
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true })

export default mongoose.model('Leaderboard', leaderboardSchema)
