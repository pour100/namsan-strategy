import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center">전문가 소개</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-2xl font-bold text-mckinsey-blue mb-4">
                Namsan Strategic Advisors
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Namsan Strategic Advisors는 제약 및 생명과학 산업에 특화된 전략 컨설팅을 제공합니다. 
                21년 이상의 실무 경험과 과학적 배경을 바탕으로, 복잡한 비즈니스 과제에 대한 
                데이터 기반의 전략적 솔루션을 제공합니다.
              </p>
              <p className="text-gray-700 leading-relaxed">
                화학 및 물리학 전공과 MBA 과정을 통해 축적된 다학제적 전문성으로, 
                기술적 깊이와 경영 전략을 결합한 독특한 관점을 제공합니다.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="card">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-mckinsey-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-mckinsey-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">21년+ 경력</h4>
                    <p className="text-sm text-gray-600">제약 산업 전문 경험</p>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-mckinsey-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-mckinsey-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">과학적 배경</h4>
                    <p className="text-sm text-gray-600">화학 및 물리학 전공</p>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-mckinsey-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-mckinsey-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">경영 전문성</h4>
                    <p className="text-sm text-gray-600">MBA 과정 수료</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
