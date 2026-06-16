import express from 'express'
import { authMiddleware } from '../middleware/authMiddleware.js'
import { asyncHandler } from '../middleware/errorHandler.js'

const router = express.Router()

// Protected routes
router.get('/profile', authMiddleware, asyncHandler(async (req, res) => {
  res.json({ message: 'Get user profile - to be implemented' })
}))

router.put('/profile', authMiddleware, asyncHandler(async (req, res) => {
  res.json({ message: 'Update user profile - to be implemented' })
}))

router.get('/stats', authMiddleware, asyncHandler(async (req, res) => {
  res.json({ message: 'Get user statistics - to be implemented' })
}))

export default router
