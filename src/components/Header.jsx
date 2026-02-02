import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-mckinsey-blue rounded-full"></div>
            <span className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-mckinsey-blue' : 'text-white'
            }`}>
              Namsan Strategic Advisors
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              소개
            </a>
            <a
              href="#experience"
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              경력
            </a>
            <a
              href="#education"
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              학력
            </a>
            <a
              href="#services"
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              서비스
            </a>
            <a
              href="#analysis"
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              실적 분석
            </a>
            <a
              href="#contact"
              className={`text-sm font-medium px-4 py-2 rounded transition-colors ${
                isScrolled
                  ? 'bg-mckinsey-blue text-white hover:bg-accent'
                  : 'bg-white text-mckinsey-blue hover:bg-mckinsey-light'
              }`}
            >
              연락하기
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
