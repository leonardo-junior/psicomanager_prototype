import { api } from 'api/api'

import { Comment } from './getComments'

type CreateComment = {
  postId: number
  title: string
  body: string
}

export const createCommentService = async (body: CreateComment) => {
  const { data } = await api.post<Partial<Comment>>(`/comments`, { ...body })

  return data
}
