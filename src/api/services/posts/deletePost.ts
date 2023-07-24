import { AxiosResponse } from 'axios'

import { Post } from './getPosts'
import { api } from 'api/api'

export const deletePostService = async (id: number) => {
  const { data }: AxiosResponse<Post> = await api.delete(`posts/${id}`)

  return data
}
