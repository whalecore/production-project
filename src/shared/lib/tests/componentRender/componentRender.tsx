import { render } from '@testing-library/react'
import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18nForTests from 'shared/config/i18n/i18nForTests'

interface renderWithRouterOptions {
  route?: string
}

export function renderWithTranslations (component: ReactNode) {
  return render(
    <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
  )
}

export function componentRender (
  component: ReactNode,
  { route = '/' }: renderWithRouterOptions = {}
) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
    </MemoryRouter>
  )
}
