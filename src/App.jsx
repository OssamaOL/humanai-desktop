import { useState } from 'react'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import Dashboard from './pages/Dashboard'
import Employees from './pages/Employees'
import Absences from './pages/Absences'
import Documents from './pages/Documents'
import Assistant from './pages/Assistant'
import Onboarding from './pages/Onboarding'
import Analytics from './pages/Analytics'
import Settings from './pages/Settings'

export default function App() {
  const [activePage, setActivePage] = useState('dashboard')

  // render correct page based on sidebar selection
  function renderPage() {
    if (activePage === 'dashboard') return <Dashboard />
    if (activePage === 'employees') return <Employees />
    if (activePage === 'absences') return <Absences />
    if (activePage === 'documents') return <Documents />
    if (activePage === 'assistant') return <Assistant />
    if (activePage === 'onboarding') return <Onboarding />
    if (activePage === 'analytics') return <Analytics />
    if (activePage === 'settings') return <Settings />
    return <Dashboard />
  }

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden', background: '#fff' }}>
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
        <TopBar />
        <div style={{ flex: 1, overflow: 'auto' }}>
          {renderPage()}
        </div>
      </div>
    </div>
  )
}
