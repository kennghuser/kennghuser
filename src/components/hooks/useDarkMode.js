import { useState, useEffect } from 'react'

const useDarkMode = () => {
  // Get system preference
  const getSystemPreference = () => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      try {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      } catch (error) {
        console.warn('matchMedia not available:', error)
        return 'light'
      }
    }
    return 'light'
  }

  // Initialize theme from localStorage or system preference
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme) {
        return savedTheme
      }
      return getSystemPreference()
    }
    return 'light'
  })

  const colorTheme = theme === "dark" ? "light" : "dark"

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove(colorTheme)
    root.classList.add(theme)
    localStorage.setItem("theme", theme)
  }, [theme, colorTheme])

  // Listen for system preference changes
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      try {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        
        const handleChange = (e) => {
          // Only auto-update if user hasn't manually set a preference
          if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light'
            setTheme(newTheme)
          }
        }

        mediaQuery.addEventListener('change', handleChange)
        
        return () => mediaQuery.removeEventListener('change', handleChange)
      } catch (error) {
        console.warn('Failed to setup media query listener:', error)
      }
    }
  }, [])

  return [colorTheme, setTheme]
}

export { useDarkMode }
