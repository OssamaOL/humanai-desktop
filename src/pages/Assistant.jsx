import { useState } from 'react'
import { Send, Bot, User, Sparkles } from 'lucide-react'

// quick suggestions shown before user types anything
const suggestions = [
  'How many employees are on leave today?',
  'Show me the turnover rate this quarter',
  'Who has a contract expiring this month?',
  'Generate an absence report for June',
]

const firstMsg = {
  role: 'assistant',
  text: "Hello! I'm HumaNai, your HR AI assistant. I can help you with employee data, absence tracking, HR analytics, document generation, and more. How can I help you today?",
  time: 'Now',
}

export default function Assistant() {
  const [messages, setMessages] = useState([firstMsg])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  // send a message - either from input or from suggestion click
  function sendMessage(text) {
    const msg = text || input.trim()
    if (!msg) return

    setInput('')
    setMessages(prev => [...prev, { role: 'user', text: msg, time: 'Now' }])
    setLoading(true)

    // TODO: connect to groq api here later
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'assistant',
        text: `I got your question: "${msg}". The AI backend will be connected in the next phase. This is just the UI for now.`,
        time: 'Now',
      }])
      setLoading(false)
    }, 1000)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#f8fafc' }}>

      {/* top header */}
      <div style={{ padding: '20px 36px 16px', borderBottom: '1.5px solid #f1f5f9', background: '#fff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 38, height: 38, borderRadius: 10,
            background: 'linear-gradient(135deg, #818cf8, #6366f1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <Sparkles size={18} style={{ color: '#fff' }} />
          </div>
          <div>
            <h1 style={{ fontSize: 18, fontWeight: 800, color: '#0f172a' }}>AI Assistant</h1>
            <p style={{ fontSize: 12, color: '#94a3b8' }}>Powered by HumaNai</p>
          </div>
        </div>
      </div>

      {/* messages list */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '24px 36px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        {messages.map((m, i) => (
          <div key={i} style={{
            display: 'flex',
            gap: 12,
            alignItems: 'flex-start',
            flexDirection: m.role === 'user' ? 'row-reverse' : 'row'
          }}>
            <div style={{
              width: 34, height: 34, borderRadius: '50%', flexShrink: 0,
              background: m.role === 'assistant' ? 'linear-gradient(135deg, #818cf8, #6366f1)' : '#e2e8f0',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {m.role === 'assistant'
                ? <Bot size={16} style={{ color: '#fff' }} />
                : <User size={16} style={{ color: '#64748b' }} />
              }
            </div>

            <div style={{
              maxWidth: '65%',
              padding: '12px 16px',
              borderRadius: m.role === 'user' ? '16px 4px 16px 16px' : '4px 16px 16px 16px',
              background: m.role === 'user' ? '#6366f1' : '#fff',
              color: m.role === 'user' ? '#fff' : '#1e293b',
              fontSize: 13.5,
              lineHeight: 1.6,
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              border: m.role === 'assistant' ? '1.5px solid #f1f5f9' : 'none',
            }}>
              {m.text}
            </div>
          </div>
        ))}

        {/* loading dots */}
        {loading && (
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <div style={{
              width: 34, height: 34, borderRadius: '50%',
              background: 'linear-gradient(135deg, #818cf8, #6366f1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <Bot size={16} style={{ color: '#fff' }} />
            </div>
            <div style={{
              padding: '14px 18px', background: '#fff',
              borderRadius: '4px 16px 16px 16px',
              border: '1.5px solid #f1f5f9',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              display: 'flex', gap: 5, alignItems: 'center'
            }}>
              {[0, 1, 2].map(i => (
                <div key={i} style={{
                  width: 7, height: 7, borderRadius: '50%', background: '#c7d2fe'
                }} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* suggestion pills - only show at start */}
      {messages.length <= 1 && (
        <div style={{ padding: '0 36px 12px', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {suggestions.map((s, i) => (
            <button
              key={i}
              onClick={() => sendMessage(s)}
              style={{
                padding: '7px 14px',
                background: '#fff',
                border: '1.5px solid #e2e8f0',
                borderRadius: 99,
                fontSize: 12.5,
                color: '#475569',
                cursor: 'pointer',
                fontWeight: 500,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#6366f1'
                e.currentTarget.style.color = '#6366f1'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#e2e8f0'
                e.currentTarget.style.color = '#475569'
              }}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* input bar */}
      <div style={{ padding: '16px 36px 24px', background: '#fff', borderTop: '1.5px solid #f1f5f9' }}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && sendMessage()}
            placeholder="Ask the HR assistant anything..."
            style={{
              flex: 1,
              padding: '12px 18px',
              border: '1.5px solid #e2e8f0',
              borderRadius: 12,
              fontSize: 13.5,
              color: '#1e293b',
              outline: 'none',
              fontFamily: 'inherit',
              background: '#f8fafc',
            }}
          />
          <button
            onClick={() => sendMessage()}
            style={{
              width: 44, height: 44,
              borderRadius: 12,
              background: '#6366f1',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(99,102,241,0.3)',
            }}
          >
            <Send size={17} style={{ color: '#fff' }} />
          </button>
        </div>
      </div>

    </div>
  )
}
