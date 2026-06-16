import { useTranslation } from 'react-i18next'
import { useAuthStore } from '../store/authStore'

export default function ProfilePage() {
  const { user } = useAuthStore()
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="card mb-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl">
              {user?.name?.charAt(0).toUpperCase()}
            </div>
            <h1 className="text-2xl font-bold mb-2">{user?.name}</h1>
            <p className="text-slate-600">{user?.email}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="card">
            <h2 className="font-bold mb-4">Profile Information</h2>
            <div className="space-y-3">
              <div>
                <p className="text-slate-600 text-sm">Email</p>
                <p className="font-semibold">{user?.email}</p>
              </div>
              <div>
                <p className="text-slate-600 text-sm">Member Since</p>
                <p className="font-semibold">January 2024</p>
              </div>
              <div>
                <p className="text-slate-600 text-sm">Current Level</p>
                <p className="font-semibold">Level 8 - Skilled</p>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="font-bold mb-4">Statistics</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-slate-600 text-sm">Best WPM</p>
                <p className="text-3xl font-bold">48</p>
              </div>
              <div>
                <p className="text-slate-600 text-sm">Best Accuracy</p>
                <p className="text-3xl font-bold">97.3%</p>
              </div>
              <div>
                <p className="text-slate-600 text-sm">XP Points</p>
                <p className="text-3xl font-bold">12,450</p>
              </div>
              <div>
                <p className="text-slate-600 text-sm">Days Streak</p>
                <p className="text-3xl font-bold">23</p>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="font-bold mb-4">Actions</h2>
            <button className="w-full py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 mb-2">
              Edit Profile
            </button>
            <button className="w-full py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 mb-2">
              Change Password
            </button>
            <button className="w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
