import { Plus, Search, FileText, Download, Eye, Trash2 } from 'lucide-react'

const documents = [
  { id: 1, name: 'Employment Contract — Sara Malik',   type: 'Contract',    size: '245 KB', date: 'Jun 01, 2026', icon: '📄' },
  { id: 2, name: 'Payslip May 2026 — Ahmed Karimi',   type: 'Payslip',     size: '120 KB', date: 'May 31, 2026', icon: '💰' },
  { id: 3, name: 'Leave Policy 2026',                  type: 'Policy',      size: '890 KB', date: 'Jan 10, 2026', icon: '📋' },
  { id: 4, name: 'Onboarding Guide — IT Dept',         type: 'Guide',       size: '1.2 MB', date: 'Mar 15, 2026', icon: '📘' },
  { id: 5, name: 'Performance Review — Omar Fassi',    type: 'Review',      size: '340 KB', date: 'Apr 20, 2026', icon: '⭐' },
  { id: 6, name: 'Health Insurance Form',              type: 'Form',        size: '180 KB', date: 'Feb 05, 2026', icon: '🏥' },
  { id: 7, name: 'NDA — Nadia Chraibi',               type: 'Contract',    size: '210 KB', date: 'Jul 03, 2023', icon: '📄' },
  { id: 8, name: 'IT Security Policy',                 type: 'Policy',      size: '560 KB', date: 'Jan 01, 2026', icon: '🔒' },
]

const typeColor = {
  Contract: { color: '#6366f1', bg: '#eef2ff' },
  Payslip:  { color: '#22c55e', bg: '#f0fdf4' },
  Policy:   { color: '#f59e0b', bg: '#fffbeb' },
  Guide:    { color: '#3b82f6', bg: '#eff6ff' },
  Review:   { color: '#a78bfa', bg: '#f5f3ff' },
  Form:     { color: '#ef4444', bg: '#fef2f2' },
}

export default function Documents() {
  return (
    <div style={{ padding: '32px 36px', background: '#f8fafc', minHeight: '100%' }}>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: 26, fontWeight: 800, color: '#0f172a', letterSpacing: '-0.5px' }}>Documents</h1>
          <p style={{ fontSize: 13.5, color: '#94a3b8', marginTop: 4 }}>HR document repository</p>
        </div>
        <button style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '10px 18px', background: '#6366f1', color: '#fff',
          border: 'none', borderRadius: 10, fontSize: 13.5, fontWeight: 600,
          cursor: 'pointer', boxShadow: '0 2px 8px rgba(99,102,241,0.3)',
        }}>
          <Plus size={15} /> Upload Document
        </button>
      </div>

      {/* Search */}
      <div style={{ position: 'relative', marginBottom: 20, maxWidth: 400 }}>
        <Search size={14} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#cbd5e1' }} />
        <input placeholder="Search documents..." style={{
          width: '100%', padding: '10px 16px 10px 36px',
          border: '1.5px solid #e2e8f0', borderRadius: 10,
          fontSize: 13.5, color: '#475569', background: '#fff',
          outline: 'none', fontFamily: 'inherit',
        }} />
      </div>

      {/* Document grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
        {documents.map((doc) => {
          const tc = typeColor[doc.type] || { color: '#64748b', bg: '#f1f5f9' }
          return (
            <div key={doc.id} style={{
              background: '#fff', borderRadius: 14, padding: '18px 20px',
              border: '1.5px solid #f1f5f9', boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              display: 'flex', alignItems: 'center', gap: 14,
              transition: 'box-shadow 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'}
            >
              <div style={{ width: 44, height: 44, borderRadius: 12, background: tc.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>
                {doc.icon}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: 13.5, fontWeight: 600, color: '#1e293b', marginBottom: 3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{doc.name}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: tc.color, background: tc.bg, padding: '2px 8px', borderRadius: 99 }}>{doc.type}</span>
                  <span style={{ fontSize: 11.5, color: '#94a3b8' }}>{doc.size} · {doc.date}</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 4, flexShrink: 0 }}>
                <button style={{ width: 30, height: 30, borderRadius: 8, border: 'none', background: '#f8fafc', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}><Eye size={14} /></button>
                <button style={{ width: 30, height: 30, borderRadius: 8, border: 'none', background: '#f8fafc', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}><Download size={14} /></button>
                <button style={{ width: 30, height: 30, borderRadius: 8, border: 'none', background: '#fef2f2', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ef4444' }}><Trash2 size={14} /></button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
