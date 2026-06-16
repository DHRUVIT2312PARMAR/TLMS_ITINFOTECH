import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import mongooseConnection from './config/database.js'

// Routes
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'
import moduleRoutes from './routes/moduleRoutes.js'
import certificateRoutes from './routes/certificateRoutes.js'
import leaderboardRoutes from './routes/leaderboardRoutes.js'
import achievementRoutes from './routes/achievementRoutes.js'

// Middleware
import { errorHandler } from './middleware/errorHandler.js'

dotenv.config()

const app = express()

// Security Middleware
app.use(helmet())
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}))

// Body Parser
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))

// Database Connection
mongooseConnection()

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/modules', moduleRoutes)
app.use('/api/certificates', certificateRoutes)
app.use('/api/leaderboard', leaderboardRoutes)
app.use('/api/achievements', achievementRoutes)

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK',
    message: 'IT INFOTECH SkillHub API is running',
    timestamp: new Date().toISOString()
  })
})

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

// Error Handler
app.use(errorHandler)

// Start Server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
  console.log(`📍 Environment: ${process.env.NODE_ENV}`)
})

export default app
