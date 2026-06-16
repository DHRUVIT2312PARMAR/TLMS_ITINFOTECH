import { create } from 'zustand'
import api from '../api/axios'

export const useAuthStore = create((set) => ({
  user: null,
  token: localStorage.getItem('token') || null,
  isLoading: false,
  error: null,

  checkAuth: async () => {
    const token = localStorage.getItem('token')
    if (token) {
      try {
        set({ isLoading: true })
        const response = await api.get('/auth/me')
        set({ user: response.data, token, isLoading: false })
      } catch (err) {
        localStorage.removeItem('token')
        set({ user: null, token: null, isLoading: false, error: err.message })
      }
    } else {
      set({ isLoading: false })
    }
  },

  login: async (email, password) => {
    try {
      set({ isLoading: true, error: null })
      const response = await api.post('/auth/login', { email, password })
      const { user, token } = response.data
      localStorage.setItem('token', token)
      set({ user, token, isLoading: false })
      return { success: true }
    } catch (err) {
      const error = err.response?.data?.message || err.message
      set({ error, isLoading: false })
      return { success: false, error }
    }
  },

  signup: async (userData) => {
    try {
      set({ isLoading: true, error: null })
      const response = await api.post('/auth/signup', userData)
      const { user, token } = response.data
      localStorage.setItem('token', token)
      set({ user, token, isLoading: false })
      return { success: true }
    } catch (err) {
      const error = err.response?.data?.message || err.message
      set({ error, isLoading: false })
      return { success: false, error }
    }
  },

  logout: () => {
    localStorage.removeItem('token')
    set({ user: null, token: null, error: null })
  },

  updateProfile: async (userData) => {
    try {
      set({ isLoading: true, error: null })
      const response = await api.put('/auth/profile', userData)
      set({ user: response.data, isLoading: false })
      return { success: true }
    } catch (err) {
      const error = err.response?.data?.message || err.message
      set({ error, isLoading: false })
      return { success: false, error }
    }
  },
}))
