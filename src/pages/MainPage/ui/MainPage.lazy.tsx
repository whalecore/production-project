import { lazy } from 'react'

const MainPageLazy = lazy(async () => await import('./MainPage'))

export default MainPageLazy
