import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store/store'
import { fetchUsers } from '../store/usersSlice'
import CardList from '../components/CardList'

export default function UsersPage() {
  const dispatch = useDispatch<AppDispatch>()
  const { items, loading, error } = useSelector((state: RootState) => state.users)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  if (loading) return <div className="loader">⏳ Загрузка пользователей...</div>
  if (error) return <div className="error">❌ {error}</div>

  return <CardList items={items} type="users" />
}