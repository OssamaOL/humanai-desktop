import { Users, CalendarOff, ClipboardList, TrendingUp, AlertTriangle, CheckCircle, Clock, XCircle } from 'lucide-react'

// kpi cards data - might move this to a separate file later
const kpis = [
  { icon: Users, label: 'Total Employees', value: '124', sub: '+3 this month', color: '#6366f1', bg: '#eef2ff' },
  { icon: CalendarOff, label: 'Absences Today', value: '14', sub: '4 pending', color: '#f59e0b', bg: '#fffbeb' },
  { icon: ClipboardList, label: 'Pending Requests', value: '8', sub: '2 urgent', color: '#ef4444', bg: '#fef2f2' },
  { icon: TrendingUp, label: 'Engagement Score', value: '82%', sub: '+5% vs last month', color: '#22c55e', bg: '#f0fdf4' },
]

const alerts = [
  { type: 'warning', icon: AlertTriangle, color: '#f59e0b', bg: '#fffbeb', title: 'High absenteeism in IT dept', time: '2h ago' },
  { type: 'success', icon: CheckCircle, color: '#22c55e', bg: '#f0fdf4', title: 'Onboarding completed — Sara M.', time: '4h ago' },
  { type: 'error', icon: XCircle, color: '#ef4444', bg: '#fef2f2', title: 'Contract expiring — Ahmed K. (3 days)', time: '5h ago' },
  // TODO: add more alert types
  { type: 'warning', icon: Clock, color: '#6366f1', bg: '#eef2ff', title: '3 leave requests awaiting approval', time: '1d ago' },
  { type: 'warning', icon: AlertTriangle, color: '#f59e0b', bg: '#fffbeb', title: 'Burnout risk detected — Dev team', time: '1d ago' },
]

const recentEmployees = [
  { name: 'Sara Malik', role: 'HR Manager', dept: 'Human Resources', status: 'Active', avatar: '47' },
  { name: 'Ahmed Karimi', role: 'Senior Dev', dept: 'IT', status: 'Active', avatar: '12' },
  { name: 'Lina Boussi', role: 'Data Analyst', dept: 'Analytics', status: 'On Leave', avatar: '32' },
  { name: 'Omar Fassi', role: 'Product Manager', dept: 'Product', status: 'Active', avatar: '15' },
]

export default function Dashboard() {
  return (
    <div style={{ padding: '32px 36px', background: '#f8fafc', minHeight: '100%' }}>

      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: '#0f172a' }}>Dashboard</h1>
        <p style={{ fontSize: 13.5, color: '#94a3b8', marginTop: 6 }}>Welcome back — here's whats happening today.</p>
      </div>

      {/* 4 kpi cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 28 }}>
        {kpis.map(({ icon: Icon, label, value, sub, color, bg }) => (
          <div key={label} style={{
            background: '#fff',
            borderRadius: 14,
            padding: '20px 20px',
            border: '1.5px solid #f1f5f9',
            boxShadow: '0 1px 6px rgba(0,0,0,0.05)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#64748b' }}>{label}</span>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon size={18} style={{ color: color }} />
              </div>
            </div>
            <div style={{ fontSize: 30, fontWeight: 800, color: '#0f172a', marginBottom: 4 }}>{value}</div>
            <div style={{ fontSize: 12, color: '#94a3b8' }}>{sub}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>

        {/* alerts section */}
        <div style={{ background: '#fff', borderRadius: 14, padding: '20px', border: '1.5px solid #f1f5f9', boxShadow: '0 1px 6px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <h2 style={{ fontSize: 15, fontWeight: 700, color: '#0f172a' }}>Recent Alerts</h2>
            <span style={{ fontSize: 12, color: '#6366f1', cursor: 'pointer', fontWeight: 600 }}>View all</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
            {alerts.map((a, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '10px 12px', borderRadius: 10, background: '#f8fafc'
              }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: a.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <a.icon size={15} style={{ color: a.color }} />
                </div>
                <p style={{ fontSize: 12.5, fontWeight: 600, color: '#1e293b', flex: 1 }}>{a.title}</p>
                <span style={{ fontSize: 11, color: '#94a3b8', whiteSpace: 'nowrap' }}>{a.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* employees - shows last 4 for now */}
        <div style={{ background: '#fff', borderRadius: 14, padding: '20px', border: '1.5px solid #f1f5f9', boxShadow: '0 1px 6px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <h2 style={{ fontSize: 15, fontWeight: 700, color: '#0f172a' }}>Recent Employees</h2>
            <span style={{ fontSize: 12, color: '#6366f1', cursor: 'pointer', fontWeight: 600 }}>View all</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
            {recentEmployees.map((emp, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 10, background: '#f8fafc' }}>
                <img
                  src={`https://i.pravatar.cc/36?img=${emp.avatar}`}
                  style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover' }}
                  alt=""
                />
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 13, fontWeight: 600, color: '#1e293b' }}>{emp.name}</p>
                  <p style={{ fontSize: 11.5, color: '#94a3b8' }}>{emp.role} · {emp.dept}</p>
                </div>
                <span style={{
                  fontSize: 11,
                  fontWeight: 600,
                  padding: '3px 10px',
                  borderRadius: 99,
                  color: emp.status === 'Active' ? '#22c55e' : '#f59e0b',
                  background: emp.status === 'Active' ? '#f0fdf4' : '#fffbeb',
                }}>
                  {emp.status}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
