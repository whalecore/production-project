import { fireEvent, screen } from '@testing-library/react'
import { withTranslation } from 'react-i18next'
import { renderWithTranslations } from 'shared/lib/tests/renderWithTranslations/renderWithTranslations'
import { Sidebar } from 'widgets/Sidebar'

describe('Sidebar', () => {
  test('render Sidebar', () => {
    const SidebarWithTranslation = withTranslation()(Sidebar)

    renderWithTranslations(<SidebarWithTranslation />)
    expect(screen.getByTestId('Sidebar')).toBeInTheDocument()
  })

  test('test toggle', () => {
    const SidebarWithTranslation = withTranslation()(Sidebar)

    renderWithTranslations(<SidebarWithTranslation />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('Sidebar')).toHaveClass('collapsed')
  })
})
