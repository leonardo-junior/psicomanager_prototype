import { BsTrashFill } from 'react-icons/bs'

import styles from './post.module.scss'
import { Button } from 'components/common/button/button'
import { Modal } from 'components/common/modal'
import { useState } from 'react'

type PostProps = {
  id: number
  title: string
  text: string
}

const comments = [
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
]

export const Post = ({ id, title, text }: PostProps) => {
  const [isCommentsModalOpen, setIsCommentsModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  function openCommentsModal() {
    setIsCommentsModalOpen(true)
  }

  function openDeletePostModal() {
    setIsDeleteModalOpen(true)
  }

  function closeModals() {
    setIsCommentsModalOpen(false)
    setIsDeleteModalOpen(false)
  }

  return (
    <>
      <Modal.Container title="Comentários" isOpen={isCommentsModalOpen} closeModal={closeModals}>
        <Modal.Comments comments={comments} />
        <Modal.Buttons confirmText="Fechar" onConfirm={closeModals} />
      </Modal.Container>

      <Modal.Container isOpen={isDeleteModalOpen} closeModal={closeModals}>
        <p className={styles.warning}>
          “Atenção! Ao excluir esta postagem os comentários também serão excluídos
        </p>

        <Modal.Buttons confirmText="Excluir" onCancel={closeModals} onConfirm={closeModals} />
      </Modal.Container>

      <article className={styles.container}>
        <span>#{id}</span>

        <h1>{title}</h1>

        <p>{text}</p>

        <div className={styles.buttons}>
          <Button variant="secondary" onClick={openCommentsModal}>
            Visualizar comentários
          </Button>

          <Button variant="secondary" onClick={openDeletePostModal}>
            <BsTrashFill color="#414141" />
          </Button>
        </div>
      </article>
    </>
  )
}
