import { api } from 'api/api'
import { AxiosResponse } from 'axios'

export type Post = {
  userId: number
  id: number
  title: string
  body: string
}

export const getPostsService = async () => {
  const { data }: AxiosResponse<Post[]> = await api.get(`/posts`)

  return data
}
