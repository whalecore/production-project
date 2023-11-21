import React, { type ErrorInfo, type ReactNode, Suspense } from 'react'
import PageError from 'widgets/PageError'
import { PageLoader } from 'widgets/PageLoader'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<
ErrorBoundaryProps,
ErrorBoundaryState
> {
  constructor (props: any) {
    super(props)
    this.state = { hasError: false }
  }

  // eslint-disable-next-line n/handle-callback-err
  static getDerivedStateFromError (error: Error): { hasError: boolean } {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch (error: any, errorInfo: ErrorInfo): void {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo)
  }

  render (): React.ReactNode {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Suspense fallback={<PageLoader />}>
          <PageError />
        </Suspense>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
