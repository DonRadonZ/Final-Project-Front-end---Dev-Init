import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AppLayout from './components/ui/AppLayout.tsx';
import Todo from './page/Todo.tsx';
import Notes from './page/Notes.tsx';


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <App/>,
      },
      {
        path: '/todo',
        element: <Todo/>,
      },
      {
        path: '/notes',
        element: <Notes/>,
      },
    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
