import { createBrowserRouter } from 'react-router-dom'

import { Layout } from '@/layout'
import { Home } from '@/pages/Home'
import { Monaco } from '@/pages/Monaco'

import { PATHS } from '.'

export const childRouter = [
  { path: PATHS.HOME, element: <Home /> },
  { path: PATHS.MONACO, element: <Monaco /> },
]

export const rootRouter = createBrowserRouter([
  { path: PATHS.HOME, element: <Layout />, children: childRouter },
])
