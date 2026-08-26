import { useEffect } from 'react'

export default function ScrollRevealManager({ page, activeProjectId }) {
  useEffect(() => {
    // Select text elements across the entire website
    const targetSelectors = [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'p',
      '.hero-greeting', '.hero-name', '.hero-role',
      '.project-card-tag', '.project-card-title', '.project-card-desc', '.under-development-badge',
      '.skill-row', '.skills-title',
      '.footer-email', '.footer-portfolio-title', '.footer-credit', '.footer-copyright', '.footer-links-grid a', '.footer-time',
      '.case-study-headline', '.case-study-summary', '.case-study-btn', '.section-heading', '.body-text',
      '.process-step-title', '.process-flow-text', '.case-study-bullets li', '.sub-bullets li', '.solution-list li', '.outcome-list li', '.learnings-list li',
      '.about-heading', '.about-subheading', '.about-body'
    ].join(', ')

    let observer = null

    // Wait for the DOM to settle after page render
    const timer = setTimeout(() => {
      const elements = Array.from(document.querySelectorAll(targetSelectors))

      observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed')
              obs.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.08,
          rootMargin: '0px 0px -40px 0px',
        }
      )

      elements.forEach((el) => {
        // Skip elements inside flip-text or already initialized
        if (el.closest('.flip-text-container') || el.closest('.flip-char')) return
        
        el.classList.add('scroll-reveal')

        // Check if already in viewport on mount
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight - 40 && rect.bottom > 0) {
          // Slight stagger for top-of-page elements
          setTimeout(() => {
            el.classList.add('revealed')
          }, 80)
        } else {
          observer.observe(el)
        }
      })
    }, 120)

    return () => {
      clearTimeout(timer)
      if (observer) {
        observer.disconnect()
      }
    }
  }, [page, activeProjectId])

  return null
}
