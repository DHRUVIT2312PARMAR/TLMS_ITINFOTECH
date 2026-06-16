import { useTranslation } from 'react-i18next'

export default function CertificatesPage() {
  const { t } = useTranslation()

  const certificates = [
    {
      id: 'ITI-2026-CFN-000001',
      title: 'Computer Fundamentals',
      date: '2024-01-15',
      status: 'verified'
    },
    {
      id: 'ITI-2026-KBD-000002',
      title: 'Keyboard Mastery',
      date: '2024-02-10',
      status: 'verified'
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{t('certificates.certificate')}s</h1>
          <p className="text-slate-600">View and manage your earned certificates</p>
        </div>

        <div className="space-y-4">
          {certificates.map(cert => (
            <div key={cert.id} className="card flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-lg">{cert.title}</h3>
                <p className="text-slate-600 text-sm">{t('certificates.certificateId')}: {cert.id}</p>
                <p className="text-slate-600 text-sm">Issued: {cert.date}</p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 text-sm">
                  View
                </button>
                <button className="px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 text-sm">
                  Download
                </button>
                <button className="px-4 py-2 bg-secondary-600 text-white rounded-lg hover:bg-secondary-700 text-sm">
                  Share
                </button>
              </div>
            </div>
          ))}
        </div>

        {certificates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600 mb-4">No certificates earned yet</p>
            <button className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
              Start Learning
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
