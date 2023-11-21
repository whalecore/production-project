import React, { useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, LangSwitcher, ThemeSwitcher } from 'shared/ui'

import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

const Sidebar = ({ className }: SidebarProps): JSX.Element => {
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
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Button data-testid="sidebar-toggle" onClick={onToggle}>toggle</Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  )
}

export default Sidebar
