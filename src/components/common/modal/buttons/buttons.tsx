import { Button } from 'components/common/button/button'

import styles from './buttons.module.scss'

type ButtonsProps = {
  onCancel?: () => void
  onConfirm: () => void
  confirmText: string
}

export const Buttons = ({ onCancel, onConfirm, confirmText }: ButtonsProps) => {
  return (
    <div className={styles.container}>
      {onCancel && (
        <Button variant="secondary" onClick={onCancel}>
          Cancelar
        </Button>
      )}

      <Button variant="primary" onClick={onConfirm}>
        {confirmText}
      </Button>
    </div>
  )
}
