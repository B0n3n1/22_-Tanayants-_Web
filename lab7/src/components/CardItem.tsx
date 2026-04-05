interface Props {
  item: any
  type: string
  onEdit?: (item: any) => void
  onDelete?: (id: number) => void
}

export default function CardItem({ item, type, onEdit, onDelete }: Props) {
  if (type === 'posts') {
    return (
      <div className="card">
        <h3>{item.title}</h3>
        <p>{item.body}</p>
        <div className="card-meta">👤 Автор ID: {item.userId} | 🆔 ID: {item.id}</div>
        <div className="card-actions">
          <button className="edit-btn" onClick={() => onEdit?.(item)}>✏️</button>
          <button className="delete-btn" onClick={() => onDelete?.(item.id)}>🗑️</button>
        </div>
      </div>
    )
  }

  if (type === 'users') {
    return (
      <div className="card">
        <h3>{item.name?.first} {item.name?.last}</h3>
        <p><strong>👤 Gender:</strong> {item.gender}<br />
        <strong>📧 Email:</strong> {item.email}<br />
        <strong>📞 Phone:</strong> {item.phone}<br />
        <strong>🌍 Country:</strong> {item.location?.country}</p>
        <div className="card-meta">🔗 {item.login?.username}</div>
      </div>
    )
  }

  return (
    <div className="card">
      <h3>😂 {item.setup}</h3>
      <p><strong>{item.punchline}</strong></p>
      <div className="card-meta">📌 Type: {item.type || 'general'}</div>
    </div>
  )
}