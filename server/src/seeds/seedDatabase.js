import mongoose from 'mongoose'
import dotenv from 'dotenv'
import User from '../models/User.js'
import Module from '../models/Module.js'
import Leaderboard from '../models/Leaderboard.js'

dotenv.config()

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/tlms_itinfotech')
    console.log('✅ Connected to MongoDB')

    // Clear existing data
    await User.deleteMany({})
    await Module.deleteMany({})
    await Leaderboard.deleteMany({})
    console.log('✅ Cleared existing data')

    // Create modules
    const modules = [
      {
        name: 'Computer Fundamentals',
        description: 'Learn basic computer knowledge',
        icon: '🖥️',
        order: 1,
        difficulty: 'beginner',
        certificateCode: 'CFN',
        passingCriteria: { minWPM: 0, minAccuracy: 50, requiredCompletions: 1 }
      },
      {
        name: 'Keyboard Mastery',
        description: 'Master keyboard typing and shortcuts',
        icon: '⌨️',
        order: 2,
        difficulty: 'beginner',
        certificateCode: 'KBD',
        passingCriteria: { minWPM: 20, minAccuracy: 80, requiredCompletions: 5 }
      },
      {
        name: 'Typing Skills',
        description: 'Improve your typing speed and accuracy',
        icon: '📝',
        order: 3,
        difficulty: 'intermediate',
        certificateCode: 'TYP',
        passingCriteria: { minWPM: 30, minAccuracy: 85, requiredCompletions: 10 }
      },
      {
        name: 'Speed Typing',
        description: 'Advanced speed typing techniques',
        icon: '⚡',
        order: 4,
        difficulty: 'intermediate',
        certificateCode: 'SPD',
        passingCriteria: { minWPM: 40, minAccuracy: 90, requiredCompletions: 15 }
      },
      {
        name: 'Professional Typing Master',
        description: 'Become a typing professional',
        icon: '👑',
        order: 5,
        difficulty: 'advanced',
        certificateCode: 'MST',
        passingCriteria: { minWPM: 60, minAccuracy: 95, requiredCompletions: 20 }
      },
      {
        name: 'Office Productivity',
        description: 'Learn MS Office and productivity tools',
        icon: '💼',
        order: 6,
        difficulty: 'intermediate',
        certificateCode: 'OFC',
        passingCriteria: { minWPM: 30, minAccuracy: 85, requiredCompletions: 10 }
      }
    ]

    const createdModules = await Module.insertMany(modules)
    console.log(`✅ Created ${createdModules.length} modules`)

    // Create sample users
    const users = [
      {
        name: 'Dhruvit Parmar',
        email: 'dhruvit@itinfotech.in',
        password: 'Test@123',
        role: 'admin',
        bestWPM: 92,
        bestAccuracy: 98.5,
        totalXP: 45000,
        level: 8,
        streak: 15
      },
      {
        name: 'Priya Sharma',
        email: 'priya@itinfotech.in',
        password: 'Test@123',
        role: 'student',
        bestWPM: 85,
        bestAccuracy: 97.8,
        totalXP: 42000,
        level: 8,
        streak: 10
      },
      {
        name: 'Arjun Singh',
        email: 'arjun@itinfotech.in',
        password: 'Test@123',
        role: 'student',
        bestWPM: 78,
        bestAccuracy: 96.2,
        totalXP: 38000,
        level: 7,
        streak: 8
      },
      {
        name: 'Neha Patel',
        email: 'neha@itinfotech.in',
        password: 'Test@123',
        role: 'student',
        bestWPM: 72,
        bestAccuracy: 95.1,
        totalXP: 35000,
        level: 7,
        streak: 5
      },
      {
        name: 'Rohit Kumar',
        email: 'rohit@itinfotech.in',
        password: 'Test@123',
        role: 'student',
        bestWPM: 68,
        bestAccuracy: 94.5,
        totalXP: 32000,
        level: 6,
        streak: 3
      }
    ]

    const createdUsers = await User.insertMany(users)
    console.log(`✅ Created ${createdUsers.length} users`)

    // Create leaderboard entries
    const leaderboardEntries = createdUsers.map((user, index) => ({
      userId: user._id,
      userName: user.name,
      userEmail: user.email,
      globalRank: index + 1,
      weeklyRank: index + 1,
      speedRank: index + 1,
      totalXP: user.totalXP,
      bestWPM: user.bestWPM,
      averageAccuracy: user.bestAccuracy,
      bestAccuracy: user.bestAccuracy,
      totalCertificates: Math.floor(Math.random() * 6),
      totalBadges: 10 + Math.floor(Math.random() * 5)
    }))

    await Leaderboard.insertMany(leaderboardEntries)
    console.log(`✅ Created leaderboard entries`)

    console.log('\n✅ Database seeded successfully!')
    process.exit(0)
  } catch (error) {
    console.error('❌ Error seeding database:', error)
    process.exit(1)
  }
}

seedDatabase()
