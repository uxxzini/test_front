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
          <h1>부산 대시보드</h1>
        </header>
        <div className="card-grid">
          <div className="card">카드 1</div>
          <div className="card">카드 2</div>
          <div className="card">카드 3</div>
        </div>
      </div>
    </div>
  )
}

export default App
