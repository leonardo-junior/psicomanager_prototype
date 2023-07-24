import { Button } from 'components/common/button/button'

import styles from './buttons.module.scss'

type ButtonsProps = {
  onConfirm: () => void
  onCancel?: () => void
  confirmText: string
  cancelText?: string
}

export const Buttons = ({ onCancel, onConfirm, confirmText, cancelText }: ButtonsProps) => {
  return (
    <div className={styles.container}>
      {onCancel && (
        <Button variant="secondary" onClick={onCancel}>
          {cancelText || 'Cancelar'}
        </Button>
      )}

      <Button variant="primary" onClick={onConfirm}>
        {confirmText}
      </Button>
    </div>
  )
}
