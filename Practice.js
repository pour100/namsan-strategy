// 1. 파이썬 분석 엔진으로부터 데이터를 받아왔다고 가정함 (JSON 형식)
const pythonAnalysisResult = {
    "hospital": "서울대병원",
    "sales": 120000000,
    "targetStatus": "★ 목표 달성 ★",
    "consultingMessage": "현재 시장 점유율 유지 전략이 유효함"
};

// 2. 버튼 클릭 시 실행될 팝업 함수 정의
function showAnalysisPopup(data) {
    console.log("------------------------------------------");
    console.log("📢 [Namsan Strategic Advisors] 분석 알림");
    console.log("------------------------------------------");
    
    // 알림창(팝업)에 띄울 메시지 구성
    const message = `
    거래처: ${data.hospital}
    당월 실적: ${data.sales.toLocaleString()}원
    분석 결과: ${data.targetStatus}
    
    [컨설팅 제언]: ${data.consultingMessage}
    `;
    
    // 실제 웹사이트라면 alert()이나 모달 창을 띄웁니다.
    console.log(message);
    console.log("------------------------------------------");
}

// 3. 사용자가 웹사이트의 '분석 결과 보기' 버튼을 눌렀다고 가정
console.log("사용자가 '실적 분석' 버튼을 클릭했습니다...");
showAnalysisPopup(pythonAnalysisResult);