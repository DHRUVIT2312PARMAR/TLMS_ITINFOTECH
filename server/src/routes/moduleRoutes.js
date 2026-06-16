import express from 'express'
import { authMiddleware } from '../middleware/authMiddleware.js'
import { asyncHandler } from '../middleware/errorHandler.js'

const router = express.Router()

// Public routes
router.get('/', asyncHandler(async (req, res) => {
  res.json({ message: 'Get all modules - to be implemented' })
}))

router.get('/:moduleId', asyncHandler(async (req, res) => {
  res.json({ message: 'Get specific module - to be implemented' })
}))

// Protected routes
router.post('/:moduleId/test-result', authMiddleware, asyncHandler(async (req, res) => {
  res.json({ message: 'Submit test result - to be implemented' })
}))

router.get('/:moduleId/user-progress', authMiddleware, asyncHandler(async (req, res) => {
  res.json({ message: 'Get user progress for module - to be implemented' })
}))

export default router
