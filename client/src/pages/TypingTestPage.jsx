import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function TypingTestPage() {
  const { moduleId } = useParams()
  const { t } = useTranslation()
  const [testContent] = useState('The quick brown fox jumps over the lazy dog. This is a sample typing test paragraph to practice your typing speed and accuracy. Keep your fingers on the home row and type as fast as you can while maintaining accuracy.')
  const [userInput, setUserInput] = useState('')
  const [isActive, setIsActive] = useState(false)
  const [timeLeft, setTimeLeft] = useState(60)
  const [results, setResults] = useState(null)

  useEffect(() => {
    if (!isActive || timeLeft === 0) return

    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
    return () => clearTimeout(timer)
  }, [isActive, timeLeft])

  useEffect(() => {
    if (timeLeft === 0 && isActive) {
      handleTestEnd()
    }
  }, [timeLeft, isActive])

  const calculateResults = () => {
    const words = userInput.trim().split(/\s+/).length
    const chars = userInput.length
    const correctChars = userInput.split('').filter((char, idx) => char === testContent[idx]).length
    const accuracy = ((correctChars / testContent.length) * 100).toFixed(2)
    const wpm = Math.round((words / (60 - timeLeft)) * 60) || 0

    return { words, wpm, accuracy, chars, correctChars }
  }

  const handleTestEnd = () => {
    setIsActive(false)
    setResults(calculateResults())
  }

  const handleStart = () => {
    setUserInput('')
    setTimeLeft(60)
    setResults(null)
    setIsActive(true)
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{t('typing.startTest')}</h1>
          <p className="text-slate-600">Module {moduleId}</p>
        </div>

        {/* Test Container */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Display Text */}
          <div className="mb-6 p-4 bg-slate-50 rounded-lg">
            <p className="text-lg font-mono text-slate-700">
              {testContent.split('').map((char, idx) => (
                <span
                  key={idx}
                  className={`${
                    idx < userInput.length
                      ? userInput[idx] === char
                        ? 'bg-green-200'
                        : 'bg-red-200'
                      : ''
                  }`}
                >
                  {char}
                </span>
              ))}
            </p>
          </div>

          {/* Input Area */}
          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onFocus={() => isActive || setIsActive(true)}
            disabled={results !== null}
            placeholder="Click here and start typing..."
            className="w-full h-32 p-4 border-2 border-slate-300 rounded-lg font-mono resize-none mb-6 disabled:bg-slate-100"
          />

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="text-center p-4 bg-slate-50 rounded-lg">
              <p className="text-slate-600 text-sm">{t('typing.time')}</p>
              <p className="text-2xl font-bold">{timeLeft}s</p>
            </div>
            {isActive && (
              <>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <p className="text-slate-600 text-sm">{t('typing.wpm')}</p>
                  <p className="text-2xl font-bold">{Math.round((userInput.trim().split(/\s+/).length / (60 - timeLeft)) * 60) || 0}</p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <p className="text-slate-600 text-sm">Chars</p>
                  <p className="text-2xl font-bold">{userInput.length}</p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <p className="text-slate-600 text-sm">{t('typing.accuracy')}</p>
                  <p className="text-2xl font-bold">
                    {((userInput.split('').filter((c, i) => c === testContent[i]).length / testContent.length) * 100).toFixed(0)}%
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleStart}
              disabled={isActive && results === null}
              className="flex-1 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 font-semibold"
            >
              {results ? 'Try Again' : 'Start Test'}
            </button>
            {isActive && results === null && (
              <button
                onClick={handleTestEnd}
                className="flex-1 py-3 bg-slate-600 text-white rounded-lg hover:bg-slate-700 font-semibold"
              >
                {t('typing.stopTest')}
              </button>
            )}
          </div>

          {/* Results */}
          {results && (
            <div className="mt-8 p-6 bg-green-50 rounded-lg border-2 border-green-200">
              <h2 className="text-2xl font-bold mb-4 text-green-800">{t('typing.results')}</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-slate-600 text-sm">{t('typing.wpm')}</p>
                  <p className="text-3xl font-bold text-primary-600">{results.wpm}</p>
                </div>
                <div>
                  <p className="text-slate-600 text-sm">{t('typing.accuracy')}</p>
                  <p className="text-3xl font-bold text-green-600">{results.accuracy}%</p>
                </div>
                <div>
                  <p className="text-slate-600 text-sm">Words</p>
                  <p className="text-3xl font-bold">{results.words}</p>
                </div>
                <div>
                  <p className="text-slate-600 text-sm">Characters</p>
                  <p className="text-3xl font-bold">{results.chars}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
