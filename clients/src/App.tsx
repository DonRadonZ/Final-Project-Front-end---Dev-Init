import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AppLayout from './components/ui/AppLayout';

import Todo from './page/Todo';
import Notes from './page/Notes';
import CalendarPage from './page/Calendar';
import Dashboard from './page/Dashboard';

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