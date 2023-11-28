import { type ButtonHTMLAttributes, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import cls from './Button.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  theme,
  square,
  size = ButtonSize.M,
  ...otherProps
}) => {
  return (
    <button
      className={classNames(
        cls.Button,
        {
          [cls.square]: square,
          [cls[size]]: true
        },
        [className, theme ? cls[theme] : '']
      )}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default Button
