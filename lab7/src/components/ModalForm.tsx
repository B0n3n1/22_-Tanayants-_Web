import { useEffect, useState } from 'react'

interface Props {
  open: boolean
  onClose: () => void
  onSave: (data: { title: string; body: string; userId: number }) => void
  initialData?: { title: string; body: string; userId: number } | null
}

export default function ModalForm({ open, onClose, onSave, initialData }: Props) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [userId, setUserId] = useState(1)

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title)
      setBody(initialData.body)
      setUserId(initialData.userId)
    } else {
      setTitle('')
      setBody('')
      setUserId(1)
    }
  }, [initialData, open])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title || !body) return
    onSave({ title, body, userId })
  }

  if (!open) return null

  return (
    <div className={`modal ${open ? 'active' : ''}`}>
      <div className="modal-content">
        <h3>{initialData ? '✏️ Редактировать пост' : '➕ Создать пост'}</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Заголовок *</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Содержание *</label>
            <textarea rows={4} value={body} onChange={(e) => setBody(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>ID автора</label>
            <input type="number" value={userId} onChange={(e) => setUserId(Number(e.target.value))} />
          </div>
          <div className="modal-buttons">
            <button type="submit" className="save-btn">💾 Сохранить</button>
            <button type="button" className="cancel-btn" onClick={onClose}>❌ Отмена</button>
          </div>
        </form>
      </div>
    </div>
  )
}