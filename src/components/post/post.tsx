import { useEffect, useState } from 'react'
import { BsTrashFill } from 'react-icons/bs'

import { Button } from 'components/common/button/button'
import { Modal } from 'components/common/modal'

import { getCommentsService } from 'api/services/comments/getComments'
import { deletePostService } from 'api/services/posts/deletePost'

import styles from './post.module.scss'

type PostProps = {
  id: number
  title: string
  text: string
}

export const Post = ({ id, title, text }: PostProps) => {
  const [isCommentsModalOpen, setIsCommentsModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  const [comments, setComments] = useState<any[]>([])

  useEffect(() => {
    if (!isCommentsModalOpen) return

    async function fetchPostsData() {
      const data = await getCommentsService(id)

      setComments(data)
    }

    fetchPostsData()
  }, [isCommentsModalOpen])

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

  async function deletePost() {
    try {
      await deletePostService(id)
      closeModals()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Modal.Container title="Criar comentário" isOpen={isCommentsModalOpen} closeModal={closeModals}>
        <Modal.Comments postId={id} comments={comments} closeModal={closeModals} />
        <Modal.Buttons confirmText="Fechar" onConfirm={closeModals} />
      </Modal.Container>

      <Modal.Container isOpen={isDeleteModalOpen} closeModal={closeModals}>
        <p className={styles.warning}>
          Atenção! Ao excluir esta postagem os comentários também serão excluídos
        </p>

        <Modal.Buttons confirmText="Excluir" onCancel={closeModals} onConfirm={deletePost} />
      </Modal.Container>

      <article className={styles.container} onClick={openCommentsModal}>
        <span>#{id}</span>

        <h1>{title}</h1>

        <p>{text}</p>

        <div className={styles.buttons} onClick={(event) => event.stopPropagation()}>
          {/* <Button variant="secondary" onClick={openCommentsModal}>
            Visualizar comentários
          </Button> */}

          <Button variant="secondary" onClick={openDeletePostModal}>
            <BsTrashFill color="#414141" />
          </Button>
        </div>
      </article>
    </>
  )
}
