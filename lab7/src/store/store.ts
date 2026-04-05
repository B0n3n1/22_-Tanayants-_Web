import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './postsSlice'
import usersReducer from './usersSlice'
import jokesReducer from './jokesSlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    jokes: jokesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch