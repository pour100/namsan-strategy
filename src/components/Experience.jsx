import React from 'react'

const Experience = () => {
  const experiences = [
    {
      period: "2020 - 현재",
      title: "Namsan Strategic Advisors",
      role: "Founder & Principal Consultant",
      description: "제약 및 생명과학 산업에 특화된 전략 컨설팅 서비스 제공. 주요 글로벌 제약사 및 바이오 기업을 대상으로 시장 진입 전략, 제품 포트폴리오 최적화, M&A 전략 수립 등의 프로젝트를 수행.",
      achievements: [
        "주요 글로벌 제약사 시장 진입 전략 수립",
        "제품 포트폴리오 최적화 프로젝트 다수 수행",
        "M&A 전략 및 실사 지원"
      ]
    },
    {
      period: "2015 - 2020",
      title: "Senior Strategy Consultant",
      role: "제약 산업 전문 컨설턴트",
      description: "제약 산업의 전략적 과제 해결을 위한 컨설팅 프로젝트 수행. 신제품 기획, 시장 분석, 경쟁 전략 수립 등의 영역에서 전문성을 발휘.",
      achievements: [
        "신제품 기획 및 시장 분석 프로젝트 리드",
        "경쟁 전략 수립 및 실행 지원",
        "고객사 매출 증대 기여"
      ]
    },
    {
      period: "2004 - 2015",
      title: "제약 산업 실무 경험",
      role: "다양한 역할 수행",
      description: "제약 산업에서 11년간 다양한 역할을 통해 실무 경험을 축적. 제품 개발, 시장 분석, 전략 기획 등 다양한 영역에서 전문성을 개발.",
      achievements: [
        "제품 개발 프로세스 개선",
        "시장 분석 및 인사이트 도출",
        "전략 기획 및 실행"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title text-center">경력 사항</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gray-300"></div>
                )}
                
                <div className="flex items-start space-x-6">
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-mckinsey-blue rounded-full flex items-center justify-center">
                      <div className="w-12 h-12 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 card">
                    <div className="mb-4">
                      <span className="text-sm font-semibold text-accent">{exp.period}</span>
                      <h3 className="text-2xl font-bold text-mckinsey-blue mt-2 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-gray-600 mb-4">{exp.role}</p>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start space-x-2 text-gray-700">
                          <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
