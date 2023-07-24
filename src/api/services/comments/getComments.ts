import { api } from 'api/api'
import { AxiosResponse } from 'axios'

export type Comment = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export const getCommentsService = async (id: number) => {
  const { data }: AxiosResponse<Comment[]> = await api.get(`/comments?postId=${id}`)

  return data
}
