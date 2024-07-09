import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AppLayout from './components/ui/AppLayout.tsx';

import Todo from './page/Todo.tsx';
import Notes from './page/Notes.tsx';
import CalendarPage from './page/Calendar.tsx';
import Dashboard from './page/Dashboard.tsx';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard/>,
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

export default function App() {
  
  return (
    <RouterProvider router={router} />
  )
}


