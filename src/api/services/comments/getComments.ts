import { api } from 'api/api'

export type Comment = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export const getCommentsService = async (id: number) => {
  const { data } = await api.get<Comment[]>(`/comments?postId=${id}`)

  return data
}
