import clsx from 'clsx'
import styles from './button.module.scss'
import { roboto } from '../fonts'

type ButtonProps = {
  variant: 'primary' | 'secondary'
} & React.ComponentProps<'button'>

export const Button = ({ variant, children }: ButtonProps) => {
  return (
    <button
      className={clsx({
        [roboto.className]: true,
        [styles.container]: true,
        [styles.primary]: variant === 'primary',
        [styles.secondary]: variant === 'secondary',
      })}
    >
      {children}
    </button>
  )
}
