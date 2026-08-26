import { useState, useEffect } from 'react'
import { ReactLenis, useLenis } from 'lenis/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HomePage from './pages/HomePage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import AboutPage from './pages/AboutPage'
import CustomCursor from './components/CustomCursor'
import { AnimatePresence } from 'framer-motion'
import SplashLoader from './components/SplashLoader'
import ScrollRevealManager from './components/ScrollRevealManager'

gsap.registerPlugin(ScrollTrigger)

function LenisScrollManager({ page, activeProjectId }) {
  const lenis = useLenis()

  // Sync Lenis scrolling with GSAP ScrollTrigger
  useEffect(() => {
    if (!lenis) return

    const handleScroll = () => {
      ScrollTrigger.update()
    }

    lenis.on('scroll', handleScroll)

    return () => {
      lenis.off('scroll', handleScroll)
    }
  }, [lenis])

  // Scroll to top and refresh ScrollTrigger on page navigation
  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }

    const timer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 60)

    return () => clearTimeout(timer)
  }, [page, activeProjectId, lenis])

  return null
}

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
        setPage('about')
      } else if (param) {
        setTimeout(() => {
          const el = document.getElementById(param)
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
          }
        }, 120)
      }
    } else if (targetPage === 'about') {
      setPage('about')
    } else if (targetPage === 'project') {
      setActiveProjectId(param || 'recruitments')
      setPage('project')
    }
  }

  // Update title on page change
  useEffect(() => {
    if (page === 'about') {
      document.title = 'About ✦ Shourya Vardhan'
    } else if (page === 'project') {
      const projectTitles = {
        'recruitments': "Recruitments '26",
        'website-revamp': "Website Revamp '26",
        'hexecute': "Hexecute"
      }
      const title = projectTitles[activeProjectId] || 'Project'
      document.title = `${title} ✦ Shourya Vardhan`
    } else {
      document.title = 'Shourya Vardhan ✦ UI/UX Designer'
    }
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
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
        infinite: false,
      }}
    >
      <LenisScrollManager page={page} activeProjectId={activeProjectId} />
      <ScrollRevealManager page={page} activeProjectId={activeProjectId} />

      {isSplashLoading ? (
        <div style={{ height: '100vh', overflow: 'hidden' }}>
          <AnimatePresence mode="wait">
            <SplashLoader key="splash" onComplete={() => setIsSplashLoading(false)} />
          </AnimatePresence>
        </div>
      ) : (
        <>
          {renderPage()}
          <CustomCursor color={getCursorColor()} />
        </>
      )}
    </ReactLenis>
  )
}

export default App
