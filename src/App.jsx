import './index.css'

function App() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="logo-placeholder">BUSAN IS GOOD</div>
        <nav>
          <ul>
            <li>대시보드</li>
            <li>통계</li>
            <li>설정</li>
          </ul>
        </nav>
      </aside>
      <div className="main-content">
        <header className="header">
          <div className="header-row">
            <h1>안전지도 통합관제 시스템</h1>
            <div className="header-actions">
              <button className="btn primary">실시간 연동</button>
              <button className="btn dark">선제 정보 발송</button>
            </div>
          </div>
          <div className="filters-row">
            <div className="chip">행사 전</div>
            <div className="chip outline">행사 중</div>
          </div>
        </header>

        <section className="kpi-row">
          <div className="kpi-card">
            <div className="kpi-title">현재 유동인구</div>
            <div className="kpi-value">769</div>
            <div className="kpi-delta up">+12.3% 평소 대비</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-title">운영 중인 CCTV</div>
            <div className="kpi-value">15/18</div>
            <div className="kpi-delta ok">83% 가동률</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-title">발생 이벤트</div>
            <div className="kpi-value">3</div>
            <div className="kpi-delta warn">주의 2건 긴급 1건</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-title">안전지수</div>
            <div className="kpi-value">87</div>
            <div className="kpi-delta up">+5.2 전일 대비</div>
          </div>
        </section>

        <div className="tabs-row">
          <span className="tab active">안전지도</span>
          <span className="tab">SOS 출동</span>
          <span className="tab">유입 추이</span>
          <span className="tab">CCTV 모니터</span>
        </div>

        <section className="content-grid">
          <div className="panel map">
            <div className="panel-title">안전지도</div>
            <div className="map-placeholder">지도/차트 영역(와이어프레임)</div>
            <div className="legend">
              <span className="dot ok"></span> 안전구역
              <span className="dot caution"></span> 주의구역
              <span className="dot danger"></span> 위험구역
            </div>
          </div>
          <div className="panel events">
            <div className="panel-title">최근 이벤트</div>
            <ul className="event-list">
              <li><span className="time">14:32</span> <span className="badge warn">주의</span> 혼잡도 증가 - C구역</li>
              <li><span className="time">14:15</span> <span className="badge info">정보</span> CCTV 재연결 - CCTV-06</li>
              <li><span className="time">13:48</span> <span className="badge danger">긴급</span> 이상 행동 감지 - B구역</li>
              <li><span className="time">13:22</span> <span className="badge info">정보</span> 정기 순찰 완료 - A구역</li>
              <li><span className="time">12:55</span> <span className="badge warn">주의</span> 주차 혼잡 - F구역</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
