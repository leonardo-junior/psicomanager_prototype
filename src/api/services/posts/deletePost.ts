import { Post } from './getPosts'
import { api } from 'api/api'

export const deletePostService = async (id: number) => {
  const { data } = await api.delete<Post>(`posts/${id}`)

  return data
}
