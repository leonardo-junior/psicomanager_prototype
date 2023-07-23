import { Post } from 'components/post/post'
import styles from './home.module.scss'
import { Button } from 'components/common/button/button'
import { BsPlus } from 'react-icons/bs'
import { Modal } from 'components/common/modal'
import { useState } from 'react'

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const posts = [
    { title: 'Example', text: 'Text Example' },
    { title: 'Example', text: 'Text Example' },
    { title: 'Example', text: 'Text Example' },
  ]

  function closeModal() {
    setIsModalOpen(false)
  }

  function openModal() {
    setIsModalOpen(true)
  }

  const confirmText =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eum quaerat minus dolorum eligendi ad quam laudantium amet hic corporis. Praesentium eum molestiae debitis incidunt? Animi consequatur officiis beatae in?'

  return (
    <>
      <Modal.Container isOpen={isModalOpen} closeModal={closeModal}>
        <p>{confirmText}</p>

        <Modal.Buttons
          confirmText="Confirmar"
          onCancel={closeModal}
          onConfirm={() => {
            return
          }}
        />
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
