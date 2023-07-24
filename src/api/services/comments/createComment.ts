import { api } from 'api/api'
import { AxiosResponse } from 'axios'
import { Post } from '../posts/getPosts'

type CreateComment = {
  postId: number
  title: string
  body: string
}

export const createCommentService = async (body: CreateComment) => {
  const { data }: AxiosResponse<Post> = await api.post(`/comments`, { ...body })

  return data
}
