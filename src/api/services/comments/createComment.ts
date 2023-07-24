import { Post } from '../posts/getPosts'
import { api } from 'api/api'

type CreateComment = {
  postId: number
  title: string
  body: string
}

export const createCommentService = async (body: CreateComment) => {
  const { data } = await api.post<Post>(`/comments`, { ...body })

  return data
}
