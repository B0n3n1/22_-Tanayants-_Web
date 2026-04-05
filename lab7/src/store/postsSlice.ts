import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export interface Post {
  id: number
  title: string
  body: string
  userId: number
}

interface PostsState {
  items: Post[]
  loading: boolean
  error: string | null
}

const initialState: PostsState = {
  items: [],
  loading: false,
  error: null,
}

const russianPosts: Post[] = [
  { id: 1, title: 'Введение в веб', body: 'Сегодня изучаю HTML и CSS.', userId: 1 },
  { id: 2, title: 'Мой первый сайт', body: 'Сверстал свою первую страницу!', userId: 1 },
  { id: 3, title: 'JavaScript - сложно', body: 'Функции и переменные пока непонятны, но буду разбираться.', userId: 2 },
  { id: 4, title: 'ыыыы', body: 'ыыыыыы!', userId: 2 },
  { id: 5, title: 'API', body: 'Узнал, как работать с API', userId: 3 },
  { id: 6, title: 'чтооооо', body: '3132132131231', userId: 3 },
  { id: 7, title: 'React', body: 'Начал изучать React', userId: 1 },
  { id: 8, title: 'TypeScript', body: 'Типизация помогает избежать ошибок. Очень полезная штука.', userId: 2 },
]

export const fetchPosts = createAsyncThunk('posts/fetch', async () => {
  await new Promise(resolve => setTimeout(resolve, 500))
  return russianPosts
})

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.items.unshift(action.payload)
    },
    updatePost: (state, action) => {
      const index = state.items.findIndex(p => p.id === action.payload.id)
      if (index !== -1) state.items[index] = action.payload
    },
    deletePost: (state, action) => {
      state.items = state.items.filter(p => p.id !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Ошибка загрузки'
      })
  },
})

export const { addPost, updatePost, deletePost } = postsSlice.actions
export default postsSlice.reducer