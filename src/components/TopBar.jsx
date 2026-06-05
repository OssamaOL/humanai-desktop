import { Search, Calendar, HelpCircle, Bell, ChevronDown } from 'lucide-react'

export default function TopBar() {
  return (
    <div style={{
      height: 64,
      minHeight: 64,
      background: '#fff',
      borderBottom: '1px solid #f1f5f9',
      display: 'flex',
      alignItems: 'center',
      padding: '0 28px',
      gap: 16,
    }}>

      {/* Search bar */}
      <div style={{ position: 'relative', width: 300 }}>
        <Search size={14} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#cbd5e1' }} />
        <input
          type="text"
          placeholder="Search for anything..."
          style={{
            width: '100%',
            padding: '9px 16px 9px 36px',
            background: '#f8fafc',
            border: '1px solid #f1f5f9',
            borderRadius: 12,
            fontSize: 13.5,
            color: '#475569',
            outline: 'none',
            fontFamily: 'inherit',
          }}
        />
      </div>

      <div style={{ flex: 1 }} />

      {/* Icon buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        {[Calendar, HelpCircle, Bell].map((Icon, i) => (
          <button key={i} style={{
            width: 36, height: 36,
            borderRadius: 10,
            border: 'none',
            background: 'transparent',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#94a3b8',
            cursor: 'pointer',
          }}>
            <Icon size={18} strokeWidth={1.8} />
          </button>
        ))}
      </div>

      {/* Divider */}
      <div style={{ width: 1, height: 28, background: '#f1f5f9' }} />

      {/* User profile */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        cursor: 'pointer',
        padding: '6px 10px',
        borderRadius: 12,
      }}>
        <img
          src="https://i.pravatar.cc/40?img=47"
          style={{ width: 34, height: 34, borderRadius: '50%', objectFit: 'cover' }}
          alt="user"
        />
        <div style={{ lineHeight: 1.3 }}>
          <div style={{ fontSize: 13.5, fontWeight: 600, color: '#1e1b4b' }}>Sara Malik</div>
          <div style={{ fontSize: 12, color: '#94a3b8' }}>MAR</div>
        </div>
        <ChevronDown size={14} style={{ color: '#94a3b8' }} />
      </div>
    </div>
  )
}
