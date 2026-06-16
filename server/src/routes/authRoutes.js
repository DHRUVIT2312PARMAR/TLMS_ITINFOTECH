import express from 'express'
import { authMiddleware } from '../middleware/authMiddleware.js'
import { asyncHandler } from '../middleware/errorHandler.js'
import { signup, login, getCurrentUser, logout, updateProfile } from '../controllers/authController.js'

const router = express.Router()

router.post('/signup', asyncHandler(signup))
router.post('/login', asyncHandler(login))
router.get('/me', authMiddleware, asyncHandler(getCurrentUser))
router.post('/logout', authMiddleware, asyncHandler(logout))
router.put('/profile', authMiddleware, asyncHandler(updateProfile))

export default router
