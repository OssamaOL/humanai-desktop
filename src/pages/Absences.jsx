import { Plus, Filter, Search, Check, X, Clock } from 'lucide-react'

const absences = [
  { id: 1, name: 'Lina Boussi',   avatar: '32', type: 'Annual Leave',    start: 'Jun 01', end: 'Jun 07', days: 6, status: 'Approved' },
  { id: 2, name: 'Ahmed Karimi',  avatar: '12', type: 'Sick Leave',      start: 'Jun 03', end: 'Jun 04', days: 2, status: 'Approved' },
  { id: 3, name: 'Nadia Chraibi', avatar: '25', type: 'Remote Work',     start: 'Jun 05', end: 'Jun 05', days: 1, status: 'Pending' },
  { id: 4, name: 'Omar Fassi',    avatar: '15', type: 'Annual Leave',    start: 'Jun 10', end: 'Jun 14', days: 5, status: 'Pending' },
  { id: 5, name: 'Youssef Alami', avatar: '53', type: 'Unpaid Leave',    start: 'Jun 15', end: 'Jun 20', days: 6, status: 'Rejected' },
  { id: 6, name: 'Sara Malik',    avatar: '47', type: 'Maternity Leave', start: 'Jul 01', end: 'Sep 30', days: 90, status: 'Approved' },
]

const statusStyle = {
  Approved: { color: '#22c55e', bg: '#f0fdf4', icon: Check },
  Pending:  { color: '#f59e0b', bg: '#fffbeb', icon: Clock },
  Rejected: { color: '#ef4444', bg: '#fef2f2', icon: X },
}

const summary = [
  { label: 'Total Requests', value: 6,   color: '#6366f1', bg: '#eef2ff' },
  { label: 'Approved',       value: 3,   color: '#22c55e', bg: '#f0fdf4' },
  { label: 'Pending',        value: 2,   color: '#f59e0b', bg: '#fffbeb' },
  { label: 'Rejected',       value: 1,   color: '#ef4444', bg: '#fef2f2' },
]

export default function Absences() {
  return (
    <div style={{ padding: '32px 36px', background: '#f8fafc', minHeight: '100%' }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: 26, fontWeight: 800, color: '#0f172a', letterSpacing: '-0.5px' }}>Absences</h1>
          <p style={{ fontSize: 13.5, color: '#94a3b8', marginTop: 4 }}>Track and manage leave requests</p>
        </div>
        <button style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '10px 18px', background: '#6366f1', color: '#fff',
          border: 'none', borderRadius: 10, fontSize: 13.5, fontWeight: 600,
          cursor: 'pointer', boxShadow: '0 2px 8px rgba(99,102,241,0.3)',
        }}>
          <Plus size={15} /> New Request
        </button>
      </div>

      {/* Summary cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 24 }}>
        {summary.map(({ label, value, color, bg }) => (
          <div key={label} style={{ background: '#fff', borderRadius: 14, padding: '18px 20px', border: '1.5px solid #f1f5f9', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <div style={{ fontSize: 28, fontWeight: 800, color, marginBottom: 4 }}>{value}</div>
            <div style={{ fontSize: 12.5, color: '#64748b', fontWeight: 500 }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Search */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
        <div style={{ position: 'relative', flex: 1 }}>
          <Search size={14} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#cbd5e1' }} />
          <input placeholder="Search absences..." style={{
            width: '100%', padding: '10px 16px 10px 36px',
            border: '1.5px solid #e2e8f0', borderRadius: 10,
            fontSize: 13.5, color: '#475569', background: '#fff',
            outline: 'none', fontFamily: 'inherit',
          }} />
        </div>
        <button style={{
          display: 'flex', alignItems: 'center', gap: 6,
          padding: '10px 16px', border: '1.5px solid #e2e8f0',
          borderRadius: 10, background: '#fff', fontSize: 13.5,
          color: '#475569', cursor: 'pointer', fontWeight: 500,
        }}>
          <Filter size={14} /> Filter
        </button>
      </div>

      {/* Table */}
      <div style={{ background: '#fff', borderRadius: 16, border: '1.5px solid #f1f5f9', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.5fr 1fr 1fr 0.5fr 1fr 1fr', padding: '14px 20px', borderBottom: '1.5px solid #f1f5f9', background: '#f8fafc' }}>
          {['Employee','Type','Start','End','Days','Status','Actions'].map(h => (
            <span key={h} style={{ fontSize: 12, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{h}</span>
          ))}
        </div>
        {absences.map((a, i) => {
          const s = statusStyle[a.status]
          return (
            <div key={a.id} style={{
              display: 'grid', gridTemplateColumns: '2fr 1.5fr 1fr 1fr 0.5fr 1fr 1fr',
              padding: '14px 20px', alignItems: 'center',
              borderBottom: i < absences.length - 1 ? '1px solid #f8fafc' : 'none',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#fafbff'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <img src={`https://i.pravatar.cc/32?img=${a.avatar}`} style={{ width: 30, height: 30, borderRadius: '50%' }} alt="" />
                <span style={{ fontSize: 13.5, fontWeight: 600, color: '#1e293b' }}>{a.name}</span>
              </div>
              <span style={{ fontSize: 13, color: '#475569' }}>{a.type}</span>
              <span style={{ fontSize: 13, color: '#475569' }}>{a.start}</span>
              <span style={{ fontSize: 13, color: '#475569' }}>{a.end}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#1e293b' }}>{a.days}</span>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 4,
                fontSize: 11.5, fontWeight: 600, padding: '3px 10px', borderRadius: 99,
                color: s.color, background: s.bg, width: 'fit-content',
              }}>
                <s.icon size={11} /> {a.status}
              </span>
              <div style={{ display: 'flex', gap: 6 }}>
                <button style={{ padding: '4px 10px', background: '#f0fdf4', color: '#22c55e', border: 'none', borderRadius: 6, fontSize: 11.5, fontWeight: 600, cursor: 'pointer' }}>Approve</button>
                <button style={{ padding: '4px 10px', background: '#fef2f2', color: '#ef4444', border: 'none', borderRadius: 6, fontSize: 11.5, fontWeight: 600, cursor: 'pointer' }}>Reject</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
