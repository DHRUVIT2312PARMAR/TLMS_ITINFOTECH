import express from 'express'
import { authMiddleware } from '../middleware/authMiddleware.js'
import { asyncHandler } from '../middleware/errorHandler.js'

const router = express.Router()

// Protected routes
router.get('/', authMiddleware, asyncHandler(async (req, res) => {
  res.json({ message: 'Get user certificates - to be implemented' })
}))

router.get('/:certificateId', asyncHandler(async (req, res) => {
  res.json({ message: 'Get specific certificate - to be implemented' })
}))

router.post('/:certificateId/download', authMiddleware, asyncHandler(async (req, res) => {
  res.json({ message: 'Download certificate as PDF - to be implemented' })
}))

router.get('/verify/:certificateId', asyncHandler(async (req, res) => {
  res.json({ message: 'Verify certificate - to be implemented' })
}))

export default router
