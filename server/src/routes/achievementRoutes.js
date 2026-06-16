import express from 'express'
import { authMiddleware } from '../middleware/authMiddleware.js'
import { asyncHandler } from '../middleware/errorHandler.js'

const router = express.Router()

// Protected routes
router.get('/', authMiddleware, asyncHandler(async (req, res) => {
  res.json({ message: 'Get user achievements - to be implemented' })
}))

router.get('/badges', authMiddleware, asyncHandler(async (req, res) => {
  res.json({ message: 'Get user badges - to be implemented' })
}))

router.get('/xp', authMiddleware, asyncHandler(async (req, res) => {
  res.json({ message: 'Get user XP and level - to be implemented' })
}))

export default router
