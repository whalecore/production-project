import { type FC, useEffect, useState } from 'react'
import { Button } from 'shared/ui'

interface BugButtonProps {
  className?: string
}

// Компонент для тестирования ошибок
const BugButton: FC<BugButtonProps> = () => {
  const [error, setError] = useState(false)

  const throwError = (): void => setError(true)

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <Button onClick={throwError}>Throw Error</Button>
  )
}

export default BugButton
