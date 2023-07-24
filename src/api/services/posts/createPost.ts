import { Post } from './getPosts'
import { api } from 'api/api'

type CreatePost = {
  title: string
  body: string
}

export const createPostService = async (body: CreatePost) => {
  const { data } = await api.post<Post>(`/posts`, { ...body, userId: 11 })

  return data
}
