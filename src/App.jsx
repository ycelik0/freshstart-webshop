import React, { useState } from 'react'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Root from './Root'
import Test from './routes/Test'
import HomePage from './routes/HomePage'
import ErrorPage from './ErrorPage'

const router = createBrowserRouter([
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route index element={<div>Home</div>} />
      <Route path='test' element={<div>Test</div>} />
    </Route>
  )
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
