import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { BsPlus } from 'react-icons/bs'

import { Button } from 'components/common/button/button'
import { roboto } from 'components/common/fonts'
import { Post } from 'components/post/post'
import { Modal } from 'components/common/modal'

import { Post as PostType, getPostsService } from 'api/services/posts/getPosts'
import { createPostService } from 'api/services/posts/createPost'

import styles from './home.module.scss'

type CreatePost = {
  title: string
  body: string
}

export const Home = () => {
  const [posts, setPosts] = useState<PostType[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { register, handleSubmit, reset } = useForm<CreatePost>()

  useEffect(() => {
    fetchPostsData()
  }, [])

  async function fetchPostsData() {
    try {
      const data = await getPostsService()

      const dataSortedAlphabetically = data.sort((a, b) => a.title.localeCompare(b.title))

      setPosts(dataSortedAlphabetically)
    } catch (error) {
      console.log(error)
    }
  }

  async function createPost(post: CreatePost) {
    try {
      await createPostService(post)

      closeModal()
    } catch (error) {
      console.log(error)
    }
  }

  function openModal() {
    setIsModalOpen(true)
  }

  function closeModal() {
    reset()
    setIsModalOpen(false)
  }

  function onSubmit(data: CreatePost) {
    const repeatedTitle = posts.some(({ title }) => data.title.toLowerCase() === title.toLowerCase())

    if (repeatedTitle) return

    createPost(data)
  }

  return (
    <>
      <Modal.Container title="Criar postagem" isOpen={isModalOpen} closeModal={closeModal}>
        <form className={styles.form}>
          <div>
            <label>Título</label>
            <input className={roboto.className} type="text" {...register('title', { required: true })} />
          </div>

          <div>
            <label>Texto</label>
            <textarea className={roboto.className} {...register('body', { required: true })} />
          </div>
        </form>

        <Modal.Buttons confirmText="Confirmar" onCancel={closeModal} onConfirm={handleSubmit(onSubmit)} />
      </Modal.Container>

      <div className={styles.container}>
        <main>
          <h1>Seja bem vindo!</h1>

          <section>
            <Button variant="primary" onClick={openModal}>
              <BsPlus fontSize={24} /> Nova postagem
            </Button>

            <ul className={styles.posts}>
              {posts.map(({ title, body, id }) => (
                <li key={id}>
                  <Post id={id} title={title} text={body} />
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </>
  )
}
