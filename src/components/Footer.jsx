import React from 'react'

const Footer = () => {
  return (
    <footer id="contact" className="bg-mckinsey-dark text-white py-16">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <h3 className="text-2xl font-bold">Namsan Strategic Advisors</h3>
            </div>
            <p className="text-mckinsey-light mb-6 leading-relaxed">
              제약 및 생명과학 산업에 특화된 전략 컨설팅을 제공합니다. 
              21년 이상의 경험과 과학적 배경을 바탕으로 귀하의 비즈니스 성공을 지원합니다.
            </p>
            <div className="space-y-2 text-mckinsey-light">
              <p className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>이메일: contact@namsanadvisors.com</span>
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">연락하기</h4>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
              }}
            >
              <div>
                <input
                  type="text"
                  placeholder="이름"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-mckinsey-light focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="이메일"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-mckinsey-light focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="메시지"
                  rows="4"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-mckinsey-light focus:outline-none focus:border-white/40 transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-white text-mckinsey-blue rounded-lg font-semibold hover:bg-mckinsey-light transition-all"
              >
                보내기
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center text-mckinsey-light text-sm">
          <p>&copy; {new Date().getFullYear()} Namsan Strategic Advisors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
