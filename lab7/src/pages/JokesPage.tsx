import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store/store'
import { fetchJokes } from '../store/jokesSlice'
import CardList from '../components/CardList'

export default function JokesPage() {
  const dispatch = useDispatch<AppDispatch>()
  const { items, loading, error } = useSelector((state: RootState) => state.jokes)

  useEffect(() => {
    dispatch(fetchJokes())
  }, [dispatch])

  if (loading) return <div className="loader">⏳ Загрузка шуток...</div>
  if (error) return <div className="error">❌ {error}</div>

  return <CardList items={items} type="jokes" />
}