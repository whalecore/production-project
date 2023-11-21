import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui'

import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

const Navbar = ({ className }: NavbarProps): JSX.Element => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          className={cls.mainLink}
          theme={AppLinkTheme.SECONDARY}
          to={'/'}
        >
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
          О сайте
        </AppLink>
      </div>
    </div>
  )
}

export default Navbar
