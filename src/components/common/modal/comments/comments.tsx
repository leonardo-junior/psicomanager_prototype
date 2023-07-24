import { Button } from 'components/common/button/button'
import styles from './comments.module.scss'
import { roboto } from 'components/common/fonts'
import { useForm } from 'react-hook-form'

type CommentsProps = {
  closeModal: () => void
  comments: string[]
}

export const Comments = ({ comments, closeModal }: CommentsProps) => {
  const { register, handleSubmit, reset } = useForm()

  function onCloseModal() {
    closeModal()
    reset()
  }

  function createComment() {
    onCloseModal()
  }

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <label>Criar comentário</label>
        <textarea className={roboto.className} {...register('comment', { required: true })} />

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
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  )
}
