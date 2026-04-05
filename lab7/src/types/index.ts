export interface Post {
  id: number
  title: string
  body: string
  userId: number
}

export interface User {
  name: { first: string; last: string }
  email: string
  gender: string
  phone: string
  location: { country: string }
  login: { username: string }
}

export interface Joke {
  setup: string
  punchline: string
  type: string
}