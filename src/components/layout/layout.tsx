import { Header } from 'components/layout/header/header'

import styles from './layout.module.scss'

type LayoutProps = {
  children: JSX.Element
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Header />

      {children}
    </div>
  )
}
