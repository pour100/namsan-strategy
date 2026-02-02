import React, { useMemo, useRef, useState } from 'react'

// Practice.js의 "파이썬 분석 엔진 결과(JSON)"를 UI에 적용한 예시
const pythonAnalysisResult = {
  hospital: '서울대병원',
  sales: 120000000,
  targetStatus: '★ 목표 달성 ★',
  consultingMessage: '현재 시장 점유율 유지 전략이 유효함',
}

// 사용자가 요청한 터미널 출력(124-128)을 "그대로" 표시하기 위한 원문 라인들
const terminalOutputLines = [
  '--- Namsan Strategic Advisors 실적 분석 결과 ---',
  '[서울대병원] 현재 실적: 120,000,000원 -> ★ 목표 달성 ★',
  '[아산병원] 현재 실적: 85,000,000원 -> 집중 관리 필요',
  '[삼성병원] 현재 실적: 150,000,000원 -> ★ 목표 달성 ★',
  '[세브란스] 현재 실적: 95,000,000원 -> 집중 관리 필요',
]

function formatKRDateTime(date = new Date()) {
  // 예: 2026-02-02 14:03
  const pad = (n) => String(n).padStart(2, '0')
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`
}

function parseTerminalLines(lines) {
  // "[서울대병원] 현재 실적: 120,000,000원 -> ★ 목표 달성 ★"
  const rowRegex = /^\[(.+?)\]\s+현재 실적:\s+([0-9,]+)원\s+->\s+(.+)$/
  return lines
    .map((line) => {
      const m = line.match(rowRegex)
      if (!m) return null
      const [, hospital, salesText, status] = m
      const sales = Number(salesText.replaceAll(',', ''))
      return { hospital, sales, salesText, status }
    })
    .filter(Boolean)
}

function Modal({ title, isOpen, onClose, children }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60]">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div
          role="dialog"
          aria-modal="true"
          className="w-full max-w-3xl rounded-xl bg-white shadow-xl border border-gray-200"
        >
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <div>
              <div className="text-xs font-semibold text-accent">
                Namsan Strategic Advisors
              </div>
              <div className="text-xl font-bold text-mckinsey-blue">{title}</div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100"
            >
              닫기
            </button>
          </div>

          <div className="px-6 py-5">{children}</div>
        </div>
      </div>
    </div>
  )
}

const Analysis = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false)
  const reportRef = useRef(null)

  // Practice.js의 showAnalysisPopup(data)에서 구성하던 메시지를 그대로 UI 텍스트로 변환
  const popupMessage = useMemo(() => {
    return [
      `거래처: ${pythonAnalysisResult.hospital}`,
      `당월 실적: ${pythonAnalysisResult.sales.toLocaleString()}원`,
      `분석 결과: ${pythonAnalysisResult.targetStatus}`,
      '',
      `[컨설팅 제언]: ${pythonAnalysisResult.consultingMessage}`,
    ].join('\n')
  }, [])

  const terminalOutputText = useMemo(() => terminalOutputLines.join('\n'), [])
  const generatedAt = useMemo(() => formatKRDateTime(new Date()), [])
  const tableRows = useMemo(
    () => parseTerminalLines(terminalOutputLines.slice(1)),
    [],
  )
  const achievedCount = useMemo(
    () =>
      tableRows.filter((r) => String(r.status).includes('목표 달성')).length,
    [tableRows],
  )
  const attentionCount = useMemo(
    () => tableRows.length - achievedCount,
    [tableRows, achievedCount],
  )
  const totalSales = useMemo(
    () => tableRows.reduce((sum, r) => sum + (r.sales || 0), 0),
    [tableRows],
  )
  const totalSalesText = useMemo(() => totalSales.toLocaleString(), [totalSales])

  const handleOpen = () => {
    // Practice.js의 "사용자가 버튼을 클릭" 흐름을 UI 이벤트로 연결
    setIsOpen(true)
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(terminalOutputText)
    } catch {
      // clipboard 권한이 없을 수 있어도 UI는 계속 동작
    }
  }

  const handleDownloadPdf = async () => {
    if (!reportRef.current) return
    setIsDownloadingPdf(true)
    try {
      // 필요 시에만 로드 (번들 최적화)
      const { default: html2pdf } = await import('html2pdf.js')

      const dateForFile = generatedAt.slice(0, 10) // YYYY-MM-DD
      const filename = `Namsan_Strategic_Advisors_Analysis_Report_${dateForFile}.pdf`

      const opt = {
        margin: [12, 12, 12, 12], // mm (top, left, bottom, right)
        filename,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['css', 'legacy'] },
      }

      await html2pdf().set(opt).from(reportRef.current).save()
    } finally {
      setIsDownloadingPdf(false)
    }
  }

  return (
    <section id="analysis" className="py-20 bg-white scroll-mt-24">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="section-title">실적 분석</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            파이썬 분석 엔진 결과(JSON)를 받아 팝업(모달)로 표시하는 흐름을 웹 UI에 적용했습니다.
            버튼 클릭 시, 터미널에서 확인한 결과를 동일한 형태로 보여줍니다.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="text-sm font-semibold text-accent mb-2">
                  Live Preview
                </div>
                <div className="text-xl font-bold text-mckinsey-blue mb-2">
                  분석 결과 보기
                </div>
                <div className="text-gray-700">
                  아래 버튼을 누르면 모달에서 결과를 확인할 수 있습니다.
                </div>
              </div>

              <button
                type="button"
                onClick={handleOpen}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-mckinsey-blue text-white font-semibold hover:bg-accent transition-colors"
              >
                실적 분석
              </button>
            </div>

            <div className="mt-6">
              <div className="text-sm font-semibold text-gray-900 mb-2">
                (미리보기) 터미널 출력 형식
              </div>
              <pre className="whitespace-pre-wrap rounded-lg bg-gray-900 text-gray-100 p-4 text-sm overflow-auto">
                {terminalOutputText}
              </pre>
            </div>
          </div>
        </div>

        <Modal
          title="분석 알림"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-gray-900">
                  터미널 출력(원문)
                </div>
                <div className="text-sm text-gray-600">
                  요청하신 5줄 결과를 그대로 표시합니다.
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50"
                >
                  복사
                </button>
                <button
                  type="button"
                  onClick={handleDownloadPdf}
                  disabled={isDownloadingPdf}
                  className="inline-flex items-center justify-center rounded-lg bg-mckinsey-blue px-4 py-2 text-sm font-semibold text-white hover:bg-accent disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isDownloadingPdf ? 'PDF 생성 중…' : 'PDF 보고서 다운로드'}
                </button>
              </div>
            </div>

            <pre className="whitespace-pre-wrap rounded-lg bg-gray-900 text-gray-100 p-4 text-sm overflow-auto">
              {terminalOutputText}
            </pre>

            <div className="border-t pt-6">
              <div className="text-sm font-semibold text-gray-900 mb-2">
                Practice.js 팝업 메시지(예시: 서울대병원)
              </div>
              <pre className="whitespace-pre-wrap rounded-lg bg-mckinsey-light text-mckinsey-dark p-4 text-sm overflow-auto border border-gray-200">
                {popupMessage}
              </pre>
            </div>
          </div>
        </Modal>

        {/* PDF 생성용: 화면 밖(offscreen)에 렌더링 (display:none 금지) */}
        <div
          className="fixed left-[-10000px] top-0 w-[794px] bg-white text-gray-900"
          aria-hidden="true"
        >
          <div ref={reportRef} className="p-10">
            {/* Header */}
            <div className="flex items-start justify-between pb-6 border-b border-gray-200">
              <div>
                <div className="text-xs font-semibold tracking-wide text-accent">
                  NAMSAN STRATEGIC ADVISORS
                </div>
                <div className="text-3xl font-bold text-mckinsey-blue mt-2">
                  실적 분석 보고서
                </div>
                <div className="text-sm text-gray-600 mt-2">
                  생성일시: {generatedAt}
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-gray-900">
                  Client / Account
                </div>
                <div className="text-lg font-bold text-mckinsey-blue">
                  {pythonAnalysisResult.hospital}
                </div>
              </div>
            </div>

            {/* Executive Summary */}
            <div className="mt-8">
              <div className="text-lg font-bold text-mckinsey-blue">
                Executive Summary
              </div>
              <div className="mt-3 grid grid-cols-3 gap-4">
                <div className="rounded-lg border border-gray-200 p-4">
                  <div className="text-xs font-semibold text-gray-500">
                    총 거래처
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mt-1">
                    {tableRows.length}
                  </div>
                </div>
                <div className="rounded-lg border border-gray-200 p-4">
                  <div className="text-xs font-semibold text-gray-500">
                    목표 달성
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mt-1">
                    {achievedCount}
                  </div>
                </div>
                <div className="rounded-lg border border-gray-200 p-4">
                  <div className="text-xs font-semibold text-gray-500">
                    집중 관리 필요
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mt-1">
                    {attentionCount}
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-lg bg-mckinsey-light border border-gray-200 p-4">
                <div className="text-sm font-semibold text-gray-900">
                  핵심 메시지
                </div>
                <div className="text-sm text-gray-700 mt-2 leading-relaxed">
                  {pythonAnalysisResult.consultingMessage}
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="mt-8">
              <div className="flex items-end justify-between">
                <div className="text-lg font-bold text-mckinsey-blue">
                  Performance Dashboard
                </div>
                <div className="text-sm text-gray-600">
                  총 실적 합계: <span className="font-semibold">{totalSalesText}</span>원
                </div>
              </div>

              <div className="mt-3 rounded-lg border border-gray-200 overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">
                        거래처
                      </th>
                      <th className="text-right px-4 py-3 font-semibold text-gray-700">
                        현재 실적(원)
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">
                        상태
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableRows.map((r) => (
                      <tr key={r.hospital} className="border-t border-gray-200">
                        <td className="px-4 py-3">{r.hospital}</td>
                        <td className="px-4 py-3 text-right tabular-nums">
                          {r.salesText}
                        </td>
                        <td className="px-4 py-3">{r.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Raw output appendix */}
            <div className="mt-8">
              <div className="text-lg font-bold text-mckinsey-blue">
                Appendix: Terminal Output (Raw)
              </div>
              <pre className="mt-3 whitespace-pre-wrap rounded-lg bg-gray-900 text-gray-100 p-4 text-xs leading-relaxed">
                {terminalOutputText}
              </pre>
            </div>

            <div className="mt-10 pt-4 border-t border-gray-200 text-xs text-gray-500">
              Confidential — Namsan Strategic Advisors
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Analysis

