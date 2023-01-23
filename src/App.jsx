import React from 'react'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Root from './Root'
import ErrorPage from './ErrorPage'
import HomePage from './routes/HomePage'
import OptionPage from './routes/OptionPage'
import ShoppingCartPage from './routes/ShoppingCartPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/option/:option',
        element: <OptionPage />,
      },
      {
        path: '/shoppingcart',
        element: <ShoppingCartPage />,
      },
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
