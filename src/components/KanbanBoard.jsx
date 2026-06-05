import { Plus, Filter, ChevronDown, Share2, LayoutList, Grid3x3 } from 'lucide-react'
import KanbanColumn from './KanbanColumn'

export const columns = [
  {
    id: 'todo',
    title: 'To Do',
    count: 4,
    color: '#6366f1',
    cards: [
      {
        id: 1,
        priority: 'Low',
        priorityColor: '#f59e0b',
        priorityBg: '#fffbeb',
        title: 'Brainstorming',
        desc: "Brainstorming brings team members' diverse experience into play.",
        comments: 12, files: 0,
        avatars: ['11','12','13','14'],
      },
      {
        id: 2,
        priority: 'High',
        priorityColor: '#ef4444',
        priorityBg: '#fef2f2',
        title: 'Research',
        desc: 'User research helps you to create an optimal product for users.',
        comments: 10, files: 3,
        avatars: ['15','16'],
        highlighted: true,
      },
      {
        id: 3,
        priority: 'High',
        priorityColor: '#ef4444',
        priorityBg: '#fef2f2',
        title: 'Wireframes',
        desc: 'Low fidelity wireframes include the most basic content and visuals.',
        comments: 8, files: 2,
        avatars: ['17','18','19'],
      },
    ],
  },
  {
    id: 'inprogress',
    title: 'On Progress',
    count: 3,
    color: '#f59e0b',
    cards: [
      {
        id: 4,
        priority: 'Low',
        priorityColor: '#f59e0b',
        priorityBg: '#fffbeb',
        title: 'Onboarding Illustrations',
        comments: 14, files: 15,
        avatars: ['21','22','23'],
        image: 'https://images.unsplash.com/photo-1490750967868-88df5691cc53?w=500&h=150&fit=crop',
      },
      {
        id: 5,
        priority: 'Low',
        priorityColor: '#f59e0b',
        priorityBg: '#fffbeb',
        title: 'Moodboard',
        comments: 9, files: 10,
        avatars: ['24'],
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=150&fit=crop',
      },
    ],
  },
  {
    id: 'done',
    title: 'Done',
    count: 2,
    color: '#22c55e',
    cards: [
      {
        id: 6,
        priority: 'Completed',
        priorityColor: '#22c55e',
        priorityBg: '#f0fdf4',
        title: 'Mobile App Design',
        comments: 12, files: 15,
        avatars: ['31','32'],
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=150&fit=crop',
      },
      {
        id: 7,
        priority: 'Completed',
        priorityColor: '#22c55e',
        priorityBg: '#f0fdf4',
        title: 'Design System',
        desc: 'It just needs to adapt the UI from what you did before',
        comments: 12, files: 15,
        avatars: ['33','34','35'],
      },
    ],
  },
]

export default function KanbanBoard() {
  return (
    <div style={{ flex: 1, overflow: 'auto', background: '#fff' }}>
      <div style={{ padding: '28px 32px 16px' }}>

        {/* Page title row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <h1 style={{ fontSize: 30, fontWeight: 800, color: '#0f172a', letterSpacing: '-0.5px' }}>
              HR Platform
            </h1>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 16, opacity: 0.4, padding: 4 }}>✏️</button>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 16, opacity: 0.4, padding: 4 }}>🔗</button>
          </div>

          {/* Invite + avatars */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button style={{
              display: 'flex', alignItems: 'center', gap: 4,
              background: 'none', border: 'none', cursor: 'pointer',
              color: '#6366f1', fontSize: 13.5, fontWeight: 600,
            }}>
              <Plus size={14} strokeWidth={2.5} /> Invite
            </button>
            <div style={{ display: 'flex' }}>
              {[41,42,43,44].map((i) => (
                <img key={i} src={`https://i.pravatar.cc/28?img=${i}`}
                  style={{ width: 28, height: 28, borderRadius: '50%', border: '2px solid #fff', marginLeft: i === 41 ? 0 : -8, objectFit: 'cover' }}
                  alt="" />
              ))}
              <div style={{
                width: 28, height: 28, borderRadius: '50%',
                border: '2px solid #fff', marginLeft: -8,
                background: '#eef2ff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 10, fontWeight: 700, color: '#6366f1',
              }}>+2</div>
            </div>
          </div>
        </div>

        {/* Toolbar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 8 }}>
            {[
              { label: 'Filter', icon: <Filter size={13} /> },
              { label: 'Today', icon: <span style={{ fontSize: 13 }}>📅</span> },
            ].map(({ label, icon }) => (
              <button key={label} style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '8px 14px',
                border: '1.5px solid #e2e8f0',
                borderRadius: 10,
                background: '#fff',
                fontSize: 13, fontWeight: 500, color: '#475569',
                cursor: 'pointer',
              }}>
                {icon} {label} <ChevronDown size={11} style={{ color: '#94a3b8' }} />
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <button style={{
              display: 'flex', alignItems: 'center', gap: 6,
              padding: '8px 14px',
              border: '1.5px solid #e2e8f0',
              borderRadius: 10,
              background: '#fff',
              fontSize: 13, fontWeight: 500, color: '#475569',
              cursor: 'pointer',
            }}>
              <Share2 size={13} /> Share
            </button>
            <div style={{ display: 'flex', border: '1.5px solid #e2e8f0', borderRadius: 10, overflow: 'hidden' }}>
              <button style={{ padding: '8px 12px', background: '#6366f1', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <LayoutList size={15} style={{ color: '#fff' }} />
              </button>
              <button style={{ padding: '8px 12px', background: '#fff', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <Grid3x3 size={15} style={{ color: '#94a3b8' }} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Columns */}
      <div style={{ display: 'flex', gap: 20, padding: '8px 32px 32px', alignItems: 'flex-start', overflowX: 'auto' }}>
        {columns.map((col) => (
          <KanbanColumn key={col.id} column={col} />
        ))}
      </div>
    </div>
  )
}
