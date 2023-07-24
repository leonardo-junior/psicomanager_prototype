import clsx from 'clsx'
import { BsXLg } from 'react-icons/bs'
import type { ReactNode } from 'react'

import { Button } from 'components/common/button/button'

import styles from './container.module.scss'

type ContainerProps = {
  isOpen: boolean
  title?: string
  closeModal: () => void
  children: ReactNode
  zIndex?: boolean
}

export const Container = ({ title, isOpen, children, closeModal, zIndex }: ContainerProps) => {
  return (
    <div
      className={clsx({
        [styles.container]: true,
        [styles.zIndex]: zIndex,
        [styles.open]: isOpen,
      })}
      onClick={closeModal}
    >
      <div className={styles.modal} onClick={(event) => event.stopPropagation()}>
        <div>
          <h2>{title}</h2>

          <Button variant="secondary" onlyIcon onClick={closeModal}>
            <BsXLg fontSize={20} color="#414141" />
          </Button>
        </div>

        {children}
      </div>
    </div>
  )
}
