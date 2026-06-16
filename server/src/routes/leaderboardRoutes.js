import express from 'express'
import { asyncHandler } from '../middleware/errorHandler.js'

const router = express.Router()

// Public routes
router.get('/global', asyncHandler(async (req, res) => {
  res.json({ message: 'Get global leaderboard - to be implemented' })
}))

router.get('/weekly', asyncHandler(async (req, res) => {
  res.json({ message: 'Get weekly leaderboard - to be implemented' })
}))

router.get('/institute/:instituteId', asyncHandler(async (req, res) => {
  res.json({ message: 'Get institute leaderboard - to be implemented' })
}))

router.get('/speed', asyncHandler(async (req, res) => {
  res.json({ message: 'Get speed leaderboard - to be implemented' })
}))

export default router
