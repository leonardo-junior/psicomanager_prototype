import { AxiosResponse } from 'axios'

import { Post } from '../posts/getPosts'
import { api } from 'api/api'

type CreateComment = {
  postId: number
  title: string
  body: string
}

export const createCommentService = async (body: CreateComment) => {
  const { data }: AxiosResponse<Post> = await api.post(`/comments`, { ...body })

  return data
}
