import { Button } from 'components/common/button/button'
import styles from './container.module.scss'
import { BsXLg } from 'react-icons/bs'
import { ReactNode } from 'react'
import clsx from 'clsx'

type ContainerProps = {
  isOpen: boolean
  closeModal: () => void
  children: ReactNode
}

export const Container = ({ isOpen, children, closeModal }: ContainerProps) => {
  return (
    <div
      className={clsx({
        [styles.container]: true,
        [styles.open]: isOpen,
      })}
      onClick={closeModal}
    >
      <div className={styles.modal} onClick={(event) => event.stopPropagation()}>
        <Button variant="secondary" onlyIcon onClick={closeModal}>
          <BsXLg fontSize={20} color="#414141" />
        </Button>

        {children}
      </div>
    </div>
  )
}
