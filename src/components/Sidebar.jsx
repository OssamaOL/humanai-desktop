import {
  LayoutDashboard, Users, CalendarOff,
  FileText, MessageSquare, UserPlus,
  BarChart2, Settings
} from 'lucide-react'

// nav links - update labels here if needed
const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
  { icon: Users, label: 'Employees', id: 'employees' },
  { icon: CalendarOff, label: 'Absences', id: 'absences' },
  { icon: FileText, label: 'Documents', id: 'documents' },
  { icon: MessageSquare, label: 'AI Assistant', id: 'assistant' },
  { icon: UserPlus, label: 'Onboarding', id: 'onboarding' },
  { icon: BarChart2, label: 'Analytics', id: 'analytics' },
  { icon: Settings, label: 'Settings', id: 'settings' },
]

export default function Sidebar({ activePage, setActivePage }) {
  return (
    <div style={{
      width: 220,
      minWidth: 220,
      height: '100vh',
      background: '#fff',
      borderRight: '1px solid #f1f5f9',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px 12px',
      overflowY: 'auto',
    }}>

      {/* logo + app name */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28, padding: '0 8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: 30,
            height: 30,
            borderRadius: 8,
            background: 'linear-gradient(135deg, #818cf8, #6366f1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(99,102,241,0.3)'
          }}>
            <span style={{ color: '#fff', fontWeight: 800, fontSize: 14 }}>H</span>
          </div>
          <span style={{ fontWeight: 700, fontSize: 15, color: '#1e1b4b' }}>HumaNai</span>
        </div>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8', padding: 4 }}>
          <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M11 19l-7-7 7-7M18 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* main nav */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {navItems.map(({ icon: Icon, label, id }) => {
          const isActive = activePage === id
          return (
            <button
              key={id}
              onClick={() => setActivePage(id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '10px 12px',
                borderRadius: 10,
                border: 'none',
                cursor: 'pointer',
                fontSize: 13.5,
                fontWeight: isActive ? 600 : 500,
                color: isActive ? '#6366f1' : '#64748b',
                background: isActive ? '#eef2ff' : 'transparent',
                textAlign: 'left',
                width: '100%',
              }}
              onMouseEnter={e => {
                if (!isActive) e.currentTarget.style.background = '#f8fafc'
              }}
              onMouseLeave={e => {
                if (!isActive) e.currentTarget.style.background = 'transparent'
              }}
            >
              <Icon size={17} strokeWidth={isActive ? 2.5 : 2} />
              {label}
            </button>
          )
        })}
      </nav>

      <div style={{ flex: 1 }} />

      {/* bottom help card */}
      <div style={{
        marginTop: 16,
        background: '#f5f3ff',
        borderRadius: 16,
        padding: '16px 14px',
        textAlign: 'center',
      }}>
        <div style={{
          width: 38,
          height: 38,
          background: '#fde68a',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 10px',
          fontSize: 18,
        }}>💡</div>
        <p style={{ fontSize: 12, fontWeight: 700, color: '#1e1b4b', marginBottom: 6 }}>Need Help?</p>
        <p style={{ fontSize: 11, color: '#94a3b8', lineHeight: 1.6, marginBottom: 12 }}>
          Check the HR documentation or contact your administrator.
        </p>
        <button style={{
          width: '100%',
          padding: '8px 0',
          background: '#fff',
          border: '1px solid #e2e8f0',
          borderRadius: 10,
          fontSize: 12,
          fontWeight: 600,
          color: '#475569',
          cursor: 'pointer',
        }}>View Docs</button>
      </div>

    </div>
  )
}
