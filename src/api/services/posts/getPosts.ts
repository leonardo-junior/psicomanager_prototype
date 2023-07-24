import { api } from 'api/api'

export type Post = {
  userId: number
  id: number
  title: string
  body: string
}

export const getPostsService = async () => {
  const { data } = await api.get<Post[]>(`/posts`)

  return data
}
