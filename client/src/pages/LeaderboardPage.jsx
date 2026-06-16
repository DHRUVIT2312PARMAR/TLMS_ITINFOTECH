import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function LeaderboardPage() {
  const { t } = useTranslation()
  const [tab, setTab] = useState('global')

  const leaderboard = [
    { rank: 1, name: 'Dhruvit Parmar', wpm: 92, accuracy: 98.5, xp: 45000 },
    { rank: 2, name: 'Priya Sharma', wpm: 85, accuracy: 97.8, xp: 42000 },
    { rank: 3, name: 'Arjun Singh', wpm: 78, accuracy: 96.2, xp: 38000 },
    { rank: 4, name: 'Neha Patel', wpm: 72, accuracy: 95.1, xp: 35000 },
    { rank: 5, name: 'Rohit Kumar', wpm: 68, accuracy: 94.5, xp: 32000 },
  ]

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{t('gamification.leaderboard')}</h1>
          <p className="text-slate-600">Compete with learners worldwide</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-slate-200">
          <button
            onClick={() => setTab('global')}
            className={`px-4 py-2 font-semibold border-b-2 ${
              tab === 'global'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-slate-600'
            }`}
          >
            Global
          </button>
          <button
            onClick={() => setTab('weekly')}
            className={`px-4 py-2 font-semibold border-b-2 ${
              tab === 'weekly'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-slate-600'
            }`}
          >
            Weekly
          </button>
          <button
            onClick={() => setTab('speed')}
            className={`px-4 py-2 font-semibold border-b-2 ${
              tab === 'speed'
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-slate-600'
            }`}
          >
            Speed Challenge
          </button>
        </div>

        {/* Leaderboard Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-6 py-3 text-left font-semibold">Rank</th>
                <th className="px-6 py-3 text-left font-semibold">Name</th>
                <th className="px-6 py-3 text-center font-semibold">{t('typing.wpm')}</th>
                <th className="px-6 py-3 text-center font-semibold">{t('typing.accuracy')}</th>
                <th className="px-6 py-3 text-center font-semibold">{t('gamification.xp')}</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((entry) => (
                <tr
                  key={entry.rank}
                  className="border-t border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <span className="text-lg font-bold text-primary-600">#{entry.rank}</span>
                  </td>
                  <td className="px-6 py-4 font-semibold">{entry.name}</td>
                  <td className="px-6 py-4 text-center">{entry.wpm}</td>
                  <td className="px-6 py-4 text-center">{entry.accuracy.toFixed(1)}%</td>
                  <td className="px-6 py-4 text-center font-semibold text-primary-600">
                    {entry.xp.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Your Position */}
        <div className="mt-8 card bg-primary-50 border-2 border-primary-200">
          <h2 className="font-bold mb-4">Your Position</h2>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <p className="text-slate-600 text-sm">Your Rank</p>
              <p className="text-2xl font-bold text-primary-600">#23</p>
            </div>
            <div>
              <p className="text-slate-600 text-sm">Your {t('typing.wpm')}</p>
              <p className="text-2xl font-bold">48</p>
            </div>
            <div>
              <p className="text-slate-600 text-sm">Your {t('typing.accuracy')}</p>
              <p className="text-2xl font-bold">97.3%</p>
            </div>
            <div>
              <p className="text-slate-600 text-sm">Your {t('gamification.xp')}</p>
              <p className="text-2xl font-bold">12,450</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
