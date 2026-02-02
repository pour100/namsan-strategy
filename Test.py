# 1. 거래처별 이번 달 실적 리스트
sales_data = [
    {"hospital": "서울대병원", "sales": 120000000}, # 1.2억
    {"hospital": "아산병원", "sales": 85000000},  # 8.5천
    {"hospital": "삼성병원", "sales": 150000000}, # 1.5억
    {"hospital": "세브란스", "sales": 95000000}   # 9.5천
]

print("--- Namsan Strategic Advisors 실적 분석 결과 ---")

# 2. 실적을 하나씩 확인하며 1억 이상인 곳만 추출
for record in sales_data:
    hospital_name = record["hospital"]
    amount = record["sales"]
    
    if amount >= 100000000:
        status = "★ 목표 달성 ★"
    else:
        status = "집중 관리 필요"
        
    print(f"[{hospital_name}] 현재 실적: {amount:,}원 -> {status}")