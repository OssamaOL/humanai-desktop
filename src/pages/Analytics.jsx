import { TrendingUp, TrendingDown, Users, CalendarOff } from 'lucide-react'

const metrics = [
  { label: 'Turnover Rate',     value: '3.2%',  change: '-0.5%', up: false, color: '#22c55e', bg: '#f0fdf4' },
  { label: 'Absenteeism Rate',  value: '11.3%', change: '+1.2%', up: true,  color: '#ef4444', bg: '#fef2f2' },
  { label: 'Avg Tenure',        value: '2.4y',  change: '+0.3y', up: true,  color: '#6366f1', bg: '#eef2ff' },
  { label: 'Headcount Growth',  value: '+8',    change: 'This Q', up: true,  color: '#f59e0b', bg: '#fffbeb' },
]

const deptData = [
  { dept: 'IT',              count: 32, pct: 80 },
  { dept: 'Human Resources', count: 12, pct: 30 },
  { dept: 'Sales',           count: 28, pct: 70 },
  { dept: 'Finance',         count: 15, pct: 37 },
  { dept: 'Design',          count: 10, pct: 25 },
  { dept: 'Product',         count: 8,  pct: 20 },
  { dept: 'Analytics',       count: 19, pct: 47 },
]

const monthlyAbsences = [
  { month: 'Jan', val: 8 },
  { month: 'Feb', val: 12 },
  { month: 'Mar', val: 7 },
  { month: 'Apr', val: 15 },
  { month: 'May', val: 10 },
  { month: 'Jun', val: 14 },
]

const maxVal = Math.max(...monthlyAbsences.map(m => m.val))

export default function Analytics() {
  return (
    <div style={{ padding: '32px 36px', background: '#f8fafc', minHeight: '100%' }}>

      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: '#0f172a', letterSpacing: '-0.5px' }}>Analytics</h1>
        <p style={{ fontSize: 13.5, color: '#94a3b8', marginTop: 4 }}>HR insights and workforce trends</p>
      </div>

      {/* KPI row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 24 }}>
        {metrics.map(({ label, value, change, up, color, bg }) => (
          <div key={label} style={{ background: '#fff', borderRadius: 14, padding: '20px', border: '1.5px solid #f1f5f9', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <p style={{ fontSize: 12.5, color: '#64748b', fontWeight: 600, marginBottom: 10 }}>{label}</p>
            <p style={{ fontSize: 28, fontWeight: 800, color: '#0f172a', letterSpacing: '-1px', marginBottom: 6 }}>{value}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {up ? <TrendingUp size={13} style={{ color }} /> : <TrendingDown size={13} style={{ color } } />}
              <span style={{ fontSize: 12, fontWeight: 600, color }}>{change}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>

        {/* Absences bar chart */}
        <div style={{ background: '#fff', borderRadius: 16, padding: '22px', border: '1.5px solid #f1f5f9', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <h2 style={{ fontSize: 15, fontWeight: 700, color: '#0f172a', marginBottom: 20 }}>Monthly Absences</h2>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, height: 140 }}>
            {monthlyAbsences.map(({ month, val }) => (
              <div key={month} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: '#6366f1' }}>{val}</span>
                <div style={{
                  width: '100%', borderRadius: 6,
                  height: `${(val / maxVal) * 100}px`,
                  background: 'linear-gradient(180deg, #818cf8, #6366f1)',
                  minHeight: 8,
                }} />
                <span style={{ fontSize: 11, color: '#94a3b8', fontWeight: 500 }}>{month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Headcount by dept */}
        <div style={{ background: '#fff', borderRadius: 16, padding: '22px', border: '1.5px solid #f1f5f9', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <h2 style={{ fontSize: 15, fontWeight: 700, color: '#0f172a', marginBottom: 18 }}>Headcount by Department</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {deptData.map(({ dept, count, pct }) => (
              <div key={dept}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: 12.5, fontWeight: 600, color: '#475569' }}>{dept}</span>
                  <span style={{ fontSize: 12.5, fontWeight: 700, color: '#1e293b' }}>{count}</span>
                </div>
                <div style={{ height: 6, background: '#f1f5f9', borderRadius: 99, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${pct}%`, background: 'linear-gradient(90deg, #818cf8, #6366f1)', borderRadius: 99 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
