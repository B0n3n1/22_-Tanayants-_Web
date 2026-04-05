import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface Joke {
  setup: string
  punchline: string
  type: string
}

interface JokesState {
  items: Joke[]
  loading: boolean
  error: string | null
}

const initialState: JokesState = {
  items: [],
  loading: false,
  error: null,
}

export const fetchJokes = createAsyncThunk('jokes/fetch', async () => {
  const res = await fetch('https://official-joke-api.appspot.com/random_ten')
  return res.json() as Promise<Joke[]>
})

const jokesSlice = createSlice({
  name: 'jokes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJokes.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchJokes.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      .addCase(fetchJokes.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Ошибка загрузки'
      })
  },
})

export default jokesSlice.reducer