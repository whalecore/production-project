import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import {
  AppLink,
  AppLinkTheme,
  Button,
  ButtonTheme,
  LangSwitcher,
  ThemeSwitcher
} from 'shared/ui'
import { ButtonSize } from 'shared/ui/Button/Button'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import MainIcon from 'shared/assets/icons/main-20-20.svg'

import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

const Sidebar = ({ className }: SidebarProps): JSX.Element => {
  const { t } = useTranslation()
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = (): void => {
    setCollapsed((prev) => !prev)
  }

  return (
    <div
      data-testid="Sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={cls.items}>
        <AppLink
          className={cls.item}
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.main}
        >
          <MainIcon className={cls.icon} />
          <span className={cls.link}>{t('Главная')}</span>
        </AppLink>
        <AppLink
          className={cls.item}
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.about}
        >
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>{t('О сайте')}</span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </div>
  )
}

export default Sidebar
