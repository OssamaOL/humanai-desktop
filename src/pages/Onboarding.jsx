import { Plus, CheckCircle, Circle, Clock, User } from 'lucide-react'

const onboardings = [
  {
    name: 'Karim Bennani', role: 'Sales Manager', avatar: '61', startDate: 'Jun 02, 2026', progress: 75,
    tasks: [
      { label: 'Sign employment contract', done: true },
      { label: 'Setup workstation & accounts', done: true },
      { label: 'Meet the team', done: true },
      { label: 'Complete HR orientation', done: false },
      { label: 'First performance check-in', done: false },
    ]
  },
  {
    name: 'Fatima Ziane', role: 'UX Researcher', avatar: '39', startDate: 'Jun 09, 2026', progress: 30,
    tasks: [
      { label: 'Sign employment contract', done: true },
      { label: 'Setup workstation & accounts', done: false },
      { label: 'Meet the team', done: false },
      { label: 'Complete HR orientation', done: false },
      { label: 'First performance check-in', done: false },
    ]
  },
]

export default function Onboarding() {
  return (
    <div style={{ padding: '32px 36px', background: '#f8fafc', minHeight: '100%' }}>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: 26, fontWeight: 800, color: '#0f172a', letterSpacing: '-0.5px' }}>Onboarding</h1>
          <p style={{ fontSize: 13.5, color: '#94a3b8', marginTop: 4 }}>Track new employee onboarding progress</p>
        </div>
        <button style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '10px 18px', background: '#6366f1', color: '#fff',
          border: 'none', borderRadius: 10, fontSize: 13.5, fontWeight: 600,
          cursor: 'pointer', boxShadow: '0 2px 8px rgba(99,102,241,0.3)',
        }}>
          <Plus size={15} /> New Onboarding
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16 }}>
        {onboardings.map((o, i) => (
          <div key={i} style={{ background: '#fff', borderRadius: 16, padding: '22px', border: '1.5px solid #f1f5f9', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>

            {/* Employee info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <img src={`https://i.pravatar.cc/44?img=${o.avatar}`} style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover' }} alt="" />
              <div>
                <p style={{ fontSize: 15, fontWeight: 700, color: '#0f172a' }}>{o.name}</p>
                <p style={{ fontSize: 12.5, color: '#94a3b8' }}>{o.role} · Started {o.startDate}</p>
              </div>
              <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                <span style={{ fontSize: 22, fontWeight: 800, color: '#6366f1' }}>{o.progress}%</span>
                <p style={{ fontSize: 11, color: '#94a3b8' }}>Complete</p>
              </div>
            </div>

            {/* Progress bar */}
            <div style={{ height: 6, background: '#f1f5f9', borderRadius: 99, marginBottom: 18, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${o.progress}%`, background: 'linear-gradient(90deg, #818cf8, #6366f1)', borderRadius: 99, transition: 'width 0.5s' }} />
            </div>

            {/* Tasks */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {o.tasks.map((t, j) => (
                <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  {t.done
                    ? <CheckCircle size={16} style={{ color: '#22c55e', flexShrink: 0 }} />
                    : <Circle size={16} style={{ color: '#e2e8f0', flexShrink: 0 }} />
                  }
                  <span style={{ fontSize: 13, color: t.done ? '#64748b' : '#1e293b', textDecoration: t.done ? 'line-through' : 'none' }}>
                    {t.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
