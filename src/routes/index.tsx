import { createBrowserRouter } from 'react-router-dom'
import Title from '../pages/Title/Title'
import Detail from '../pages/Detail/Detail'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Title />,
  },
  {
    path: '/card',
    element: <Detail />,
  },
])
