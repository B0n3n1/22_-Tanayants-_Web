import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <div className="nav-buttons">
      <NavLink to="/posts" className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}>
        📝 Посты
      </NavLink>
      <NavLink to="/users" className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}>
        👥 Пользователи
      </NavLink>
      <NavLink to="/jokes" className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}>
        😂 Шутки
      </NavLink>
    </div>
  )
}