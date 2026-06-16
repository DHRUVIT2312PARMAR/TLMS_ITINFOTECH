import mongoose from 'mongoose'

const achievementSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  badge: {
    type: String,
    required: true
  },
  badgeIcon: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  trigger: {
    type: String,
    enum: ['first_login', 'wpm_milestone', 'accuracy_milestone', 'completion', 'streak', 'time_based'],
    required: true
  },
  triggerValue: {
    type: Number,
    default: null
  },
  unlockedAt: {
    type: Date,
    default: Date.now
  },
  xpReward: {
    type: Number,
    default: 0
  },
  coinReward: {
    type: Number,
    default: 0
  },
  isShared: {
    type: Boolean,
    default: false
  },
  sharedOn: [{
    platform: String,
    sharedAt: Date
  }]
}, { timestamps: true })

export default mongoose.model('Achievement', achievementSchema)
