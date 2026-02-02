import React from 'react'

const Education = () => {
  const education = [
    {
      degree: "MBA",
      institution: "경영대학원",
      period: "경영학 석사 과정",
      description: "전략 경영, 마케팅, 재무 관리 등 경영 전반에 대한 체계적인 지식 습득. 비즈니스 전략 수립 및 실행 역량 강화.",
      highlights: [
        "전략 경영 및 리더십",
        "마케팅 전략",
        "재무 분석 및 의사결정"
      ]
    },
    {
      degree: "화학 및 물리학",
      institution: "이공계 학부",
      period: "이학 학사",
      description: "화학과 물리학을 전공으로 하여 과학적 사고와 분석 능력을 기반으로 한 문제 해결 역량을 개발. 실험 설계 및 데이터 분석 능력 습득.",
      highlights: [
        "화학 전공 (유기화학, 분석화학)",
        "물리학 전공 (양자역학, 열역학)",
        "실험 설계 및 데이터 분석"
      ]
    }
  ]

  return (
    <section id="education" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title text-center">학력 및 전문성</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              과학적 배경과 경영 전문성을 결합한 독특한 전문성을 보유하고 있습니다. 
              화학 및 물리학 전공을 통해 습득한 분석적 사고와 MBA 과정을 통해 개발한 
              경영 전략 역량이 제약 산업 컨설팅에서 강점으로 작용합니다.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div key={index} className="card">
                <div className="mb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-mckinsey-blue/10 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-mckinsey-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-mckinsey-blue">{edu.degree}</h3>
                      <p className="text-sm text-gray-600">{edu.institution}</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-accent font-medium mb-3">{edu.period}</p>
                  <p className="text-gray-700 mb-4 leading-relaxed">{edu.description}</p>
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">주요 영역</h4>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          {/* Unique Value Proposition */}
          <div className="mt-12 card bg-gradient-to-br from-mckinsey-blue to-mckinsey-dark text-white">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">다학제적 전문성</h3>
              <p className="text-lg text-mckinsey-light leading-relaxed">
                과학적 배경과 경영 전문성의 결합은 제약 산업에서 특히 강점이 됩니다. 
                기술적 깊이를 이해하면서도 비즈니스 관점에서 전략을 수립할 수 있는 
                독특한 역량을 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
