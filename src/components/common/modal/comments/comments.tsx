import { useForm } from 'react-hook-form'

import { Button } from 'components/common/button/button'
import { roboto } from 'components/common/fonts'

import type { Comment } from 'api/services/comments/getComments'
import { createCommentService } from 'api/services/comments/createComment'
import { useAlertModalContext } from 'contexts/alertModalContext'

import styles from './comments.module.scss'

type CommentsProps = {
  postId: number
  closeModal: () => void
  comments: Comment[]
}

type CreateComment = {
  title: string
  body: string
}

export const Comments = ({ postId, comments, closeModal }: CommentsProps) => {
  const { setErrorModal, setSuccessModal } = useAlertModalContext()
  const { register, handleSubmit, reset } = useForm<CreateComment>()

  function onCloseModal() {
    closeModal()
    reset()
  }

  async function createComment({ title, body }: CreateComment) {
    try {
      await createCommentService({
        title,
        body,
        postId,
      })

      onCloseModal()

      setSuccessModal('Comentário criado com sucesso!')
    } catch (error) {
      setErrorModal(() => createComment({ title, body }))
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <label>Título</label>
        <input className={roboto.className} type="text" {...register('title', { required: true })} />

        <label>Comentário</label>
        <textarea className={roboto.className} {...register('body', { required: true })} />

        <div>
          <Button type="button" variant="secondary" onClick={onCloseModal}>
            Cancelar
          </Button>

          <Button variant="primary" onClick={handleSubmit(createComment)}>
            Criar
          </Button>
        </div>
      </form>

      <h2>Comentários</h2>

      <ul className={styles.comments}>
        {comments.map((comment, index) => (
          <li key={index}>
            <p>{comment.body}</p>

            <address>{comment.name}</address>
          </li>
        ))}
      </ul>
    </div>
  )
}
