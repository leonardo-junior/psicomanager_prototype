import { Post } from 'components/post/post'
import styles from './home.module.scss'
import { Button } from 'components/common/button/button'
import { BsPlus } from 'react-icons/bs'

export const Home = () => {
  const posts = [
    { title: 'Example', text: 'Text Example' },
    { title: 'Example', text: 'Text Example' },
    { title: 'Example', text: 'Text Example' },
  ]

  return (
    <div className={styles.container}>
      <main>
        <h1>Seja bem vindo!</h1>

        <section>
          <Button variant="primary">
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
  )
}
