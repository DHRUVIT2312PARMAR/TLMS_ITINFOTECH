import { useTranslation } from 'react-i18next'
import { useAuthStore } from '../store/authStore'

export default function DashboardPage() {
  const { user } = useAuthStore()
  const { t } = useTranslation()

  const modules = [
    { id: 1, name: t('modules.computerFundamentals'), icon: '🖥️', progress: 100 },
    { id: 2, name: t('modules.keyboardMastery'), icon: '⌨️', progress: 75 },
    { id: 3, name: t('modules.typingSkills'), icon: '📝', progress: 50 },
    { id: 4, name: t('modules.speedTyping'), icon: '⚡', progress: 25 },
    { id: 5, name: t('modules.professionalMaster'), icon: '👑', progress: 0 },
    { id: 6, name: t('modules.officeProductivity'), icon: '💼', progress: 0 },
  ]

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Welcome back, {user?.name}!</h1>
          <p className="text-slate-600">Here's your learning progress</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <p className="text-slate-600 text-sm">{t('typing.wpm')}</p>
            <p className="text-3xl font-bold">48</p>
            <p className="text-xs text-green-600">↑ 5 from last week</p>
          </div>
          <div className="card">
            <p className="text-slate-600 text-sm">{t('typing.accuracy')}</p>
            <p className="text-3xl font-bold">97.3%</p>
            <p className="text-xs text-green-600">↑ 0.5% from last week</p>
          </div>
          <div className="card">
            <p className="text-slate-600 text-sm">{t('gamification.xp')}</p>
            <p className="text-3xl font-bold">12,450</p>
            <p className="text-xs text-blue-600">Level 8</p>
          </div>
          <div className="card">
            <p className="text-slate-600 text-sm">{t('gamification.streak')}</p>
            <p className="text-3xl font-bold">23</p>
            <p className="text-xs text-orange-600">Days 🔥</p>
          </div>
        </div>

        {/* Learning Progress */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Learning Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map(module => (
              <div key={module.id} className="card hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{module.icon}</span>
                  <span className="text-sm font-semibold text-primary-600">{module.progress}%</span>
                </div>
                <h3 className="font-semibold mb-3">{module.name}</h3>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary-600 to-secondary-600 h-2 rounded-full transition-all"
                    style={{ width: `${module.progress}%` }}
                  ></div>
                </div>
                <button className="mt-4 w-full py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 text-sm font-semibold">
                  {module.progress === 100 ? 'Review' : 'Continue'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Achievements */}
        <div className="card">
          <h2 className="text-2xl font-bold mb-4">Recent Achievements</h2>
          <div className="flex gap-4 flex-wrap">
            {['⌨️', '🚀', '🎯', '🔥', '💎'].map((badge, idx) => (
              <div key={idx} className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-2xl">
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
