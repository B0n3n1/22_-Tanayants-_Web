import { Routes, Route, Navigate } from 'react-router-dom'
import Navigation from './components/Navigation'
import PostsPage from './pages/PostsPage'
import UsersPage from './pages/UsersPage'
import JokesPage from './pages/JokesPage'

function App() {
  return (
    <>
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/posts" />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/jokes" element={<JokesPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App