import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-4">
              {t('common.appName')}
            </h1>
            <p className="text-2xl text-primary-600 mb-8">
              {t('common.tagline')}
            </p>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Master typing skills, earn verified certificates, and unlock your potential with our comprehensive digital learning platform.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                to="/signup"
                className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold"
              >
                Get Started Free
              </Link>
              <Link
                to="/leaderboard"
                className="px-8 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-lg hover:bg-primary-50 font-semibold"
              >
                View Leaderboard
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose IT INFOTECH SkillHub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '📚',
                title: '6 Progressive Modules',
                desc: 'From computer fundamentals to professional typing master'
              },
              {
                icon: '🎮',
                title: 'Gamification System',
                desc: 'Earn badges, XP points, and climb the global leaderboard'
              },
              {
                icon: '📜',
                title: 'Verified Certificates',
                desc: 'Industry-recognized certificates with QR verification'
              },
              {
                icon: '🌍',
                title: 'Multi-Language Support',
                desc: 'Learn in English, Gujarati, or Hindi'
              },
              {
                icon: '📊',
                title: 'Detailed Analytics',
                desc: 'Track your progress with comprehensive statistics'
              },
              {
                icon: '👥',
                title: 'Community Features',
                desc: 'Connect with learners worldwide'
              },
            ].map((feature, idx) => (
              <div key={idx} className="card hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50K+', label: 'Active Users' },
              { number: '1M+', label: 'Tests Completed' },
              { number: '6', label: 'Learning Modules' },
              { number: '15+', label: 'Badges' },
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-4xl font-bold text-primary-400 mb-2">{stat.number}</p>
                <p className="text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Join thousands of students mastering typing skills today
          </p>
          <Link
            to="/signup"
            className="inline-block px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold"
          >
            Start Free Trial
          </Link>
        </div>
      </section>
    </div>
  )
}
