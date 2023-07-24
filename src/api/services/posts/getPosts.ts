import { AxiosResponse } from 'axios'

import { api } from 'api/api'

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
