import { lazy } from 'react'

const AboutPageLazy = lazy(async () => await import('./AboutPage'))

export default AboutPageLazy
