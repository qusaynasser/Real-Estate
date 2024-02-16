import React from 'react'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import WebLayout from './layout/WebLayout';
import Login from './components/web/login/Login';
import Register from './components/web/register/Register';
import Home from './components/web/home/Home';
export default function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"register",
      element:<Register/>
    },
    {
      path: "/",
      element: <WebLayout/>,
      children:[{
        path:'home',
        element:<Home/>
      }]
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}
