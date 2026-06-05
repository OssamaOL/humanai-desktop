import { User, Bell, Shield, Palette, Database, Globe } from 'lucide-react'
import { useState } from 'react'

const sections = [
  { id: 'profile',   icon: User,    label: 'Profile' },
  { id: 'notifs',    icon: Bell,    label: 'Notifications' },
  { id: 'security',  icon: Shield,  label: 'Security' },
  { id: 'appearance',icon: Palette, label: 'Appearance' },
  { id: 'data',      icon: Database,label: 'Data & Privacy' },
  { id: 'language',  icon: Globe,   label: 'Language' },
]

function Toggle({ defaultOn = false }) {
  const [on, setOn] = useState(defaultOn)
  return (
    <div onClick={() => setOn(!on)} style={{
      width: 40, height: 22, borderRadius: 99,
      background: on ? '#6366f1' : '#e2e8f0',
      cursor: 'pointer', position: 'relative', transition: 'background 0.2s',
    }}>
      <div style={{
        width: 16, height: 16, borderRadius: '50%', background: '#fff',
        position: 'absolute', top: 3,
        left: on ? 21 : 3,
        transition: 'left 0.2s',
        boxShadow: '0 1px 4px rgba(0,0,0,0.15)',
      }} />
    </div>
  )
}

export default function Settings() {
  const [active, setActive] = useState('profile')

  return (
    <div style={{ display: 'flex', height: '100%', background: '#f8fafc' }}>

      {/* Left nav */}
      <div style={{ width: 200, borderRight: '1.5px solid #f1f5f9', background: '#fff', padding: '24px 12px', display: 'flex', flexDirection: 'column', gap: 2 }}>
        <p style={{ fontSize: 11, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '0 10px', marginBottom: 8 }}>Settings</p>
        {sections.map(({ id, icon: Icon, label }) => (
          <button key={id} onClick={() => setActive(id)} style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '9px 12px', borderRadius: 10, border: 'none',
            cursor: 'pointer', fontSize: 13.5,
            fontWeight: active === id ? 600 : 500,
            color: active === id ? '#6366f1' : '#64748b',
            background: active === id ? '#eef2ff' : 'transparent',
            textAlign: 'left', width: '100%',
          }}
          onMouseEnter={e => { if (active !== id) e.currentTarget.style.background = '#f8fafc' }}
          onMouseLeave={e => { if (active !== id) e.currentTarget.style.background = 'transparent' }}
          >
            <Icon size={15} /> {label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: '32px 36px', overflowY: 'auto' }}>

        {active === 'profile' && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 800, color: '#0f172a', marginBottom: 6 }}>Profile Settings</h2>
            <p style={{ fontSize: 13, color: '#94a3b8', marginBottom: 28 }}>Update your personal information</p>

            <div style={{ background: '#fff', borderRadius: 16, padding: '28px', border: '1.5px solid #f1f5f9', maxWidth: 560 }}>
              {/* Avatar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
                <img src="https://i.pravatar.cc/64?img=47" style={{ width: 64, height: 64, borderRadius: '50%' }} alt="" />
                <div>
                  <button style={{ padding: '7px 16px', background: '#6366f1', color: '#fff', border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer', marginRight: 8 }}>Change Photo</button>
                  <button style={{ padding: '7px 16px', background: '#f1f5f9', color: '#64748b', border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 500, cursor: 'pointer' }}>Remove</button>
                </div>
              </div>

              {[
                { label: 'Full Name',    placeholder: 'Sara Malik',      type: 'text' },
                { label: 'Email',        placeholder: 'sara@humanai.com',  type: 'email' },
                { label: 'Job Title',    placeholder: 'HR Manager',          type: 'text' },
                { label: 'Department',   placeholder: 'Human Resources',     type: 'text' },
              ].map(({ label, placeholder, type }) => (
                <div key={label} style={{ marginBottom: 18 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>{label}</label>
                  <input type={type} placeholder={placeholder} style={{
                    width: '100%', padding: '10px 14px',
                    border: '1.5px solid #e2e8f0', borderRadius: 10,
                    fontSize: 13.5, color: '#1e293b', outline: 'none',
                    fontFamily: 'inherit', background: '#f8fafc',
                  }} />
                </div>
              ))}

              <button style={{ padding: '10px 24px', background: '#6366f1', color: '#fff', border: 'none', borderRadius: 10, fontSize: 13.5, fontWeight: 600, cursor: 'pointer', marginTop: 8 }}>
                Save Changes
              </button>
            </div>
          </div>
        )}

        {active === 'notifs' && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 800, color: '#0f172a', marginBottom: 6 }}>Notifications</h2>
            <p style={{ fontSize: 13, color: '#94a3b8', marginBottom: 28 }}>Choose what you want to be notified about</p>
            <div style={{ background: '#fff', borderRadius: 16, padding: '24px', border: '1.5px solid #f1f5f9', maxWidth: 560, display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                { label: 'New leave requests',        sub: 'Get notified when an employee submits a request', on: true },
                { label: 'Contract expiry alerts',    sub: 'Reminder 30 days before a contract expires',      on: true },
                { label: 'Onboarding milestones',     sub: 'Track new employee onboarding progress',           on: false },
                { label: 'Engagement score updates',  sub: 'Weekly engagement score report',                   on: true },
                { label: 'Security alerts',           sub: 'Unauthorized access attempts',                     on: true },
              ].map(({ label, sub, on }, i, arr) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0', borderBottom: i < arr.length - 1 ? '1px solid #f8fafc' : 'none' }}>
                  <div>
                    <p style={{ fontSize: 13.5, fontWeight: 600, color: '#1e293b', marginBottom: 2 }}>{label}</p>
                    <p style={{ fontSize: 12, color: '#94a3b8' }}>{sub}</p>
                  </div>
                  <Toggle defaultOn={on} />
                </div>
              ))}
            </div>
          </div>
        )}

        {(active !== 'profile' && active !== 'notifs') && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '60%', color: '#94a3b8' }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>🚧</div>
            <p style={{ fontSize: 15, fontWeight: 600, color: '#475569' }}>Coming Soon</p>
            <p style={{ fontSize: 13 }}>This section will be available in the next update.</p>
          </div>
        )}
      </div>
    </div>
  )
}
