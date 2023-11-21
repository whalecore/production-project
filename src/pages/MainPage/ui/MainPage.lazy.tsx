import { lazy } from 'react'

const MainPageLazy = lazy(
  async () =>
    await new Promise((resolve) => {
      setTimeout(
        () =>
        // @ts-expect-error some compilator warnings
          resolve(import('./MainPage')),
        1500
      )
    })
)

export default MainPageLazy
