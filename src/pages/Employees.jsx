import { Search, Plus, Filter, MoreHorizontal } from 'lucide-react'

const employees = [
  { id: 1, name: 'Sara Malik', role: 'HR Manager', dept: 'Human Resources', status: 'Active', joined: 'Jan 2022', avatar: '47' },
  { id: 2, name: 'Ahmed Karimi', role: 'Senior Developer', dept: 'IT', status: 'Active', joined: 'Mar 2021', avatar: '12' },
  { id: 3, name: 'Lina Boussi', role: 'Data Analyst', dept: 'Analytics', status: 'On Leave', joined: 'Jul 2023', avatar: '32' },
  { id: 4, name: 'Omar Fassi', role: 'Product Manager', dept: 'Product', status: 'Active', joined: 'Nov 2020', avatar: '15' },
  { id: 5, name: 'Nadia Chraibi', role: 'UX Designer', dept: 'Design', status: 'Active', joined: 'Feb 2023', avatar: '25' },
  { id: 6, name: 'Youssef Alami', role: 'DevOps Engineer', dept: 'IT', status: 'Active', joined: 'May 2022', avatar: '53' },
  { id: 7, name: 'Imane Tazi', role: 'Accountant', dept: 'Finance', status: 'Inactive', joined: 'Aug 2019', avatar: '44' },
  { id: 8, name: 'Karim Bennani', role: 'Sales Manager', dept: 'Sales', status: 'Active', joined: 'Oct 2021', avatar: '61' },
]

// colors for status badges
const statusColors = {
  Active: { color: '#22c55e', bg: '#f0fdf4' },
  'On Leave': { color: '#f59e0b', bg: '#fffbeb' },
  Inactive: { color: '#ef4444', bg: '#fef2f2' },
}

export default function Employees() {
  return (
    <div style={{ padding: '32px 36px', background: '#f8fafc', minHeight: '100%' }}>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: 26, fontWeight: 800, color: '#0f172a' }}>Employees</h1>
          <p style={{ fontSize: 13.5, color: '#94a3b8', marginTop: 5 }}>Manage your team members</p>
        </div>
        <button style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '10px 18px',
          background: '#6366f1',
          color: '#fff',
          border: 'none',
          borderRadius: 10,
          fontSize: 13.5,
          fontWeight: 600,
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(99,102,241,0.3)',
        }}>
          <Plus size={15} /> Add Employee
        </button>
      </div>

      {/* search and filter row */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
        <div style={{ position: 'relative', flex: 1 }}>
          <Search size={14} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#cbd5e1' }} />
          <input
            placeholder="Search employees..."
            style={{
              width: '100%',
              padding: '10px 16px 10px 36px',
              border: '1.5px solid #e2e8f0',
              borderRadius: 10,
              fontSize: 13.5,
              color: '#475569',
              background: '#fff',
              outline: 'none',
              fontFamily: 'inherit',
            }}
          />
        </div>
        <button style={{
          display: 'flex', alignItems: 'center', gap: 6,
          padding: '10px 16px',
          border: '1.5px solid #e2e8f0',
          borderRadius: 10,
          background: '#fff',
          fontSize: 13.5,
          color: '#475569',
          cursor: 'pointer',
          fontWeight: 500,
        }}>
          <Filter size={14} /> Filter
        </button>
      </div>

      {/* table */}
      <div style={{ background: '#fff', borderRadius: 14, border: '1.5px solid #f1f5f9', boxShadow: '0 1px 6px rgba(0,0,0,0.05)', overflow: 'hidden' }}>

        {/* header row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1.5fr 1.5fr 1fr 1fr 0.5fr',
          padding: '13px 20px',
          borderBottom: '1.5px solid #f1f5f9',
          background: '#f8fafc'
        }}>
          {['Employee', 'Role', 'Department', 'Status', 'Joined', ''].map(h => (
            <span key={h} style={{ fontSize: 12, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{h}</span>
          ))}
        </div>

        {employees.map((emp, i) => (
          <div
            key={emp.id}
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1.5fr 1.5fr 1fr 1fr 0.5fr',
              padding: '13px 20px',
              alignItems: 'center',
              borderBottom: i < employees.length - 1 ? '1px solid #f8fafc' : 'none',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#fafbff'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <img src={`https://i.pravatar.cc/36?img=${emp.avatar}`} style={{ width: 34, height: 34, borderRadius: '50%', objectFit: 'cover' }} alt="" />
              <span style={{ fontSize: 13.5, fontWeight: 600, color: '#1e293b' }}>{emp.name}</span>
            </div>
            <span style={{ fontSize: 13, color: '#475569' }}>{emp.role}</span>
            <span style={{ fontSize: 13, color: '#475569' }}>{emp.dept}</span>
            <span style={{
              display: 'inline-flex',
              fontSize: 11.5,
              fontWeight: 600,
              padding: '3px 10px',
              borderRadius: 99,
              color: statusColors[emp.status]?.color,
              background: statusColors[emp.status]?.bg,
              width: 'fit-content',
            }}>
              {emp.status}
            </span>
            <span style={{ fontSize: 13, color: '#94a3b8' }}>{emp.joined}</span>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#cbd5e1' }}>
              <MoreHorizontal size={16} />
            </button>
          </div>
        ))}
      </div>

    </div>
  )
}
