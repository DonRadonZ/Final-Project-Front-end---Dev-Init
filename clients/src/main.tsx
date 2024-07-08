import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AppLayout from './components/ui/AppLayout.tsx';
import Todo from './page/Todo.tsx';
import Notes from './page/Notes.tsx';

import CalendarPage from './page/Calendar.tsx';
import { DarkModeProvider } from './context/DarkmodeContext.tsx';


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <App/>,
      },
      {
        path: '/calendar',
        element: <CalendarPage/>,
      },
      {
        path: '/todo',
        element: <Todo/>,
      },
      {
        path: '/notes',
        element: <Notes/>,
      },  
    ],
  },
]);




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DarkModeProvider>
    <RouterProvider router={router} />
    </DarkModeProvider>
  </React.StrictMode>,
)
