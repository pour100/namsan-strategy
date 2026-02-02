import React from 'react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-mckinsey-blue via-mckinsey-dark to-mckinsey-blue text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="section-container relative z-10 text-center py-32">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8">
              전략 컨설팅 전문가
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            정우식
          </h1>
          
          <div className="mb-8">
            <h2 className="text-2xl md:text-4xl font-light mb-4 text-mckinsey-light">
              Namsan Strategic Advisors
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-mckinsey-light mb-12 leading-relaxed max-w-3xl mx-auto">
            21년 이상의 제약 산업 경험과 과학적 배경을 바탕으로<br />
            전략적 인사이트와 실행 가능한 솔루션을 제공합니다
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#about"
              className="px-8 py-4 bg-white text-mckinsey-blue rounded-lg font-semibold hover:bg-mckinsey-light transition-all transform hover:scale-105 shadow-lg"
            >
              더 알아보기
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              연락하기
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
