import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface User {
  name: { first: string; last: string }
  email: string
  gender: string
  phone: string
  location: { country: string }
  login: { username: string }
}

interface UsersState {
  items: User[]
  loading: boolean
  error: string | null
}

const initialState: UsersState = {
  items: [],
  loading: false,
  error: null,
}

export const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const res = await fetch('https://randomuser.me/api/?results=10')
  const data = await res.json()
  return data.results as User[]
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Ошибка загрузки'
      })
  },
})

export default usersSlice.reducer