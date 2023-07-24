import Link from 'next/link'

import styles from './header.module.scss'

export const Header = () => {
  return (
    <div className={styles.container}>
      <header>
        <nav className={styles.logo}>
          <Link href="/">BlogPub</Link>
        </nav>
      </header>
    </div>
  )
}
