import styles from './comments.module.scss'

type CommentsProps = {
  comments: string[]
}

export const Comments = ({ comments }: CommentsProps) => {
  return (
    <ul className={styles.container}>
      {comments.map((comment, index) => (
        <li key={index}>{comment}</li>
      ))}
    </ul>
  )
}
