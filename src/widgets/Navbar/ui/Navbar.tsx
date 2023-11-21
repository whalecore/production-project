import React from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui'

import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

const Navbar = ({ className }: NavbarProps): JSX.Element => {
  const { t } = useTranslation()
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          className={cls.mainLink}
          theme={AppLinkTheme.SECONDARY}
          to="/"
        >
          {t('Главная')}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
          {t('О сайте')}
        </AppLink>
      </div>
    </div>
  )
}

export default Navbar
