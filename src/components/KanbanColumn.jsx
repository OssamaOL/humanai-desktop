import { Plus, MoreHorizontal, MessageSquare, Paperclip } from 'lucide-react'

export default function KanbanColumn({ column }) {
  return (
    <div style={{ width: 300, minWidth: 300, display: 'flex', flexDirection: 'column' }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 9, height: 9, borderRadius: '50%', background: column.color, flexShrink: 0 }} />
          <span style={{ fontSize: 14, fontWeight: 700, color: '#0f172a' }}>{column.title}</span>
          <span style={{
            fontSize: 11, fontWeight: 600, color: '#94a3b8',
            background: '#f1f5f9',
            borderRadius: 99,
            padding: '2px 8px',
          }}>{column.count}</span>
        </div>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8', display: 'flex', alignItems: 'center' }}>
          <Plus size={16} strokeWidth={2.5} />
        </button>
      </div>

      {/* Color bar */}
      <div style={{ height: 3, borderRadius: 99, background: column.color, marginBottom: 16 }} />

      {/* Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {column.cards.map((card) => (
          <KanbanCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  )
}

function KanbanCard({ card }) {
  return (
    <div style={{
      background: '#fff',
      borderRadius: 16,
      padding: '16px',
      border: card.highlighted ? '2px dashed #c7d2fe' : '1.5px solid #f1f5f9',
      boxShadow: card.highlighted
        ? '0 4px 16px rgba(99,102,241,0.08)'
        : '0 2px 8px rgba(0,0,0,0.04)',
      cursor: 'pointer',
      transition: 'box-shadow 0.2s, transform 0.2s',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.10)'
      e.currentTarget.style.transform = 'translateY(-2px)'
    }}
    onMouseLeave={e => {
      e.currentTarget.style.boxShadow = card.highlighted ? '0 4px 16px rgba(99,102,241,0.08)' : '0 2px 8px rgba(0,0,0,0.04)'
      e.currentTarget.style.transform = 'translateY(0)'
    }}
    >

      {/* Priority + menu */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
        <span style={{
          fontSize: 11.5,
          fontWeight: 600,
          color: card.priorityColor,
          background: card.priorityBg,
          borderRadius: 6,
          padding: '3px 10px',
        }}>
          {card.priority}
        </span>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#cbd5e1', display: 'flex', alignItems: 'center' }}>
          <MoreHorizontal size={15} />
        </button>
      </div>

      {/* Title */}
      <p style={{ fontSize: 15, fontWeight: 700, color: '#0f172a', marginBottom: card.desc ? 6 : 0, lineHeight: 1.3 }}>
        {card.title}
      </p>

      {/* Description */}
      {card.desc && (
        <p style={{ fontSize: 12.5, color: '#94a3b8', lineHeight: 1.6, marginBottom: 12 }}>
          {card.desc}
        </p>
      )}

      {/* Image */}
      {card.image && (
        <div style={{ borderRadius: 12, overflow: 'hidden', marginBottom: 12, marginTop: card.desc ? 0 : 8 }}>
          <img
            src={card.image}
            alt={card.title}
            style={{ width: '100%', height: 130, objectFit: 'cover', display: 'block' }}
            onError={(e) => { e.target.style.display = 'none' }}
          />
        </div>
      )}

      {/* Footer */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
        {/* Avatars */}
        <div style={{ display: 'flex' }}>
          {card.avatars.slice(0, 4).map((a, i) => (
            <img
              key={i}
              src={`https://i.pravatar.cc/24?img=${a}`}
              style={{
                width: 24, height: 24,
                borderRadius: '50%',
                border: '2px solid #fff',
                marginLeft: i === 0 ? 0 : -6,
                objectFit: 'cover',
              }}
              alt=""
            />
          ))}
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: '#94a3b8', fontWeight: 500 }}>
            <MessageSquare size={12} strokeWidth={1.8} />
            {card.comments} comments
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: '#94a3b8', fontWeight: 500 }}>
            <Paperclip size={12} strokeWidth={1.8} />
            {card.files} files
          </span>
        </div>
      </div>
    </div>
  )
}
