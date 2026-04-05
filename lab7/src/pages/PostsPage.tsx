import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store/store'
import { fetchPosts, addPost, updatePost, deletePost, Post } from '../store/postsSlice'
import CardList from '../components/CardList'
import ModalForm from '../components/ModalForm'

export default function PostsPage() {
  const dispatch = useDispatch<AppDispatch>()
  const { items, loading, error } = useSelector((state: RootState) => state.posts)
  const [modalOpen, setModalOpen] = useState(false)
  const [editingPost, setEditingPost] = useState<Post | null>(null)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  const handleEdit = (post: Post) => {
    setEditingPost(post)
    setModalOpen(true)
  }

  const handleDelete = (id: number) => {
    if (confirm('Удалить пост?')) {
      dispatch(deletePost(id))
    }
  }

  const handleSave = (data: { title: string; body: string; userId: number }) => {
    if (editingPost) {
      dispatch(updatePost({ ...editingPost, ...data }))
    } else {
      dispatch(addPost({ ...data, id: Date.now() }))
    }
    setModalOpen(false)
    setEditingPost(null)
  }

  if (loading) return <div className="loader">⏳ Загрузка постов...</div>
  if (error) return <div className="error">❌ {error}</div>

  return (
    <>
      <button className="add-btn" onClick={() => setModalOpen(true)}>➕ Создать пост</button>
      <CardList items={items} type="posts" onEdit={handleEdit} onDelete={handleDelete} />
      <ModalForm
        open={modalOpen}
        onClose={() => { setModalOpen(false); setEditingPost(null) }}
        onSave={handleSave}
        initialData={editingPost}
      />
    </>
  )
}