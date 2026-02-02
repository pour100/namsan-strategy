import React from 'react'

const Services = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "시장 진입 전략",
      description: "신규 시장 진입을 위한 전략 수립 및 실행 계획 수립. 시장 분석, 경쟁 분석, 포지셔닝 전략 등을 포함합니다."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "제품 포트폴리오 최적화",
      description: "기존 제품 포트폴리오 분석 및 최적화 전략 수립. 제품 라이프사이클 관리, 신제품 기획 등을 지원합니다."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "M&A 전략 및 실사",
      description: "인수합병 전략 수립 및 실사 지원. 타겟 기업 분석, 가치 평가, 통합 전략 등을 제공합니다."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "경쟁 전략 수립",
      description: "시장 경쟁 환경 분석 및 경쟁 우위 확보를 위한 전략 수립. 차별화 전략, 가격 전략 등을 포함합니다."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "비즈니스 모델 혁신",
      description: "기존 비즈니스 모델 분석 및 혁신 전략 수립. 디지털 전환, 새로운 수익 모델 개발 등을 지원합니다."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "조직 역량 강화",
      description: "조직의 전략 실행 역량 강화를 위한 컨설팅. 프로세스 개선, 조직 구조 최적화 등을 제공합니다."
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">컨설팅 서비스</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            제약 및 생명과학 산업의 복잡한 비즈니스 과제를 해결하기 위한 
            전략적 컨설팅 서비스를 제공합니다.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card group hover:border-accent transition-all">
              <div className="text-mckinsey-blue mb-4 group-hover:text-accent transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-mckinsey-blue mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="card bg-mckinsey-blue text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">프로젝트 문의</h3>
            <p className="text-mckinsey-light mb-6">
              귀하의 비즈니스 과제에 대한 맞춤형 솔루션을 제공하기 위해 
              언제든지 연락 주시기 바랍니다.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-white text-mckinsey-blue rounded-lg font-semibold hover:bg-mckinsey-light transition-all"
            >
              연락하기
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
