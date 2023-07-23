import { roboto } from '../fonts'
import clsx from 'clsx'

import styles from './button.module.scss'

type ButtonProps = {
  variant: 'primary' | 'secondary'
  onlyIcon?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ variant, onlyIcon, children, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx({
        [roboto.className]: true,
        [styles.container]: true,
        [styles.primary]: variant === 'primary',
        [styles.secondary]: variant === 'secondary',
        [styles.onlyIcon]: onlyIcon,
      })}
      {...props}
    >
      {children}
    </button>
  )
}
