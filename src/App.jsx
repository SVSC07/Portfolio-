import { useState, useEffect } from 'react'
import HomePage from './pages/HomePage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import AboutPage from './pages/AboutPage'
import CustomCursor from './components/CustomCursor'
import { AnimatePresence } from 'framer-motion'
import SplashLoader from './components/SplashLoader'


function App() {
  const [page, setPage] = useState('home') // 'home' | 'project' | 'about'
  const [activeProjectId, setActiveProjectId] = useState('recruitments') // 'recruitments' | 'website-revamp'
  const [isSplashLoading, setIsSplashLoading] = useState(true)

  const getCursorColor = () => {
    if (page === 'home' || page === 'about') return '#000000';
    const projectColors = {
      'website-revamp': '#F9595E',
      'recruitments': '#181C1E',
      'hexecute': '#20312F'
    };
    return projectColors[activeProjectId] || '#000000';
  };

  const handleNavigate = (targetPage, param) => {
    if (targetPage === 'home') {
      setPage('home')
      if (param && param === 'about') {
        // "About" navigates to the About page
        setPage('about')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (param) {
        setTimeout(() => {
          const el = document.getElementById(param)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    } else if (targetPage === 'about') {
      setPage('about')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (targetPage === 'project') {
      setActiveProjectId(param || 'recruitments')
      setPage('project')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [page, activeProjectId])

  const renderPage = () => {
    switch (page) {
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />
      case 'project':
        return (
          <ProjectDetailPage
            projectId={activeProjectId}
            onNavigate={handleNavigate}
          />
        )
      default:
        return <HomePage onNavigate={handleNavigate} />
    }
  }

  return (
    <div style={{ height: isSplashLoading ? '100vh' : 'auto', overflow: isSplashLoading ? 'hidden' : 'auto' }}>
      <AnimatePresence mode="wait">
        {isSplashLoading && (
          <SplashLoader key="splash" onComplete={() => setIsSplashLoading(false)} />
        )}
      </AnimatePresence>
      
      {renderPage()}
      <CustomCursor color={getCursorColor()} />
    </div>
  )
}

export default App
