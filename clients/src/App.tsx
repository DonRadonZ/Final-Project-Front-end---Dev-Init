import {createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./components/ui/AppLayout"
import Dashboard from "./page/Dashboard";
import Todo from "./page/Todo";
import Notes from "./page/Notes";


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard/>,
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

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}


