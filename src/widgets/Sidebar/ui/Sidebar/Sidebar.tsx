import React, { useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { LangSwitcher, ThemeSwitcher } from 'shared/ui'

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
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className
      ])}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  )
}

export default Sidebar
