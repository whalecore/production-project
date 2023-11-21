import React, { Suspense } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/router'
import { classNames } from 'shared/lib/classNames/classNames'

import './styles/index.scss'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

const App = (): JSX.Element => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={'Loading...'}>
        <Navbar />
        <div className={'content-page'}>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
