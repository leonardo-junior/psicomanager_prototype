import { BsTrashFill } from 'react-icons/bs'

import styles from './post.module.scss'
import { Button } from 'components/common/button/button'

type PostProps = {
  id: number
  title: string
  text: string
}

export const Post = ({ id, title, text }: PostProps) => {
  return (
    <article className={styles.container}>
      <span>#{id}</span>

      <h1>{title}</h1>

      <p>{text}</p>

      <div className={styles.buttons}>
        <Button variant="secondary">Visualizar comentários</Button>

        <Button variant="secondary">
          <BsTrashFill color="#414141" />
        </Button>
      </div>
    </article>
  )
}
