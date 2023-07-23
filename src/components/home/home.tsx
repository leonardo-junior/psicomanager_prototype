import { Post } from 'components/post/post'
import styles from './home.module.scss'
import { Button } from 'components/common/button/button'
import { BsPlus } from 'react-icons/bs'
import { Modal } from 'components/common/modal'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { roboto } from 'components/common/fonts'

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { register, handleSubmit, reset } = useForm()

  const posts = [
    { title: 'Example', text: 'Text Example' },
    { title: 'Example', text: 'Text Example' },
    { title: 'Example', text: 'Text Example' },
  ]

  function closeModal() {
    reset()
    setIsModalOpen(false)
  }

  function openModal() {
    setIsModalOpen(true)
  }

  const confirmText =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eum quaerat minus dolorum eligendi ad quam laudantium amet hic corporis. Praesentium eum molestiae debitis incidunt? Animi consequatur officiis beatae in?'

  function onSubmit(data: any) {
    console.log(data)
  }

  return (
    <>
      <Modal.Container isOpen={isModalOpen} closeModal={closeModal}>
        <form className={styles.form}>
          <div>
            <label>Título</label>
            <input className={roboto.className} type="text" {...register('title', { required: true })} />
          </div>

          <div>
            <label>Texto</label>
            <textarea className={roboto.className} {...register('text', { required: true })} />
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
              {posts.map(({ text, title }, index) => (
                <li key={index}>
                  <Post id={index} title={title} text={text} />
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </>
  )
}
