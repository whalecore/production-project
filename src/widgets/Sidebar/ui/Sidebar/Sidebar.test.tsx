import { fireEvent, screen } from '@testing-library/react'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'
import { Sidebar } from 'widgets/Sidebar'

describe('Sidebar', () => {
  test('render Sidebar', () => {
    componentRender(<Sidebar />)
    expect(screen.getByTestId('Sidebar')).toBeInTheDocument()
  })

  test('test toggle', () => {
    componentRender(<Sidebar />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('Sidebar')).toHaveClass('collapsed')
  })
})
