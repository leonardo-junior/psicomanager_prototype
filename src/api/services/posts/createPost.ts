import { api } from 'api/api'
import { AxiosResponse } from 'axios'
import { Post } from './getPosts'

type CreatePost = {
  title: string
  body: string
}

export const createPostService = async (body: CreatePost) => {
  const { data }: AxiosResponse<Post> = await api.post(`/posts`, { ...body, userId: 11 })

  return data
}
