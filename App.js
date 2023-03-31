// import logo from './logo.svg';
import './App.css';
import PermanentDrawerLeft from './Components/sidebar/sidebar'
import Profile from './Components/profile/profile'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UpdatePassword from './Components/changePassword/password'
import BookingHistory from './Components/bookingHistory/booking'
// import Login from './Components'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PermanentDrawerLeft />,
    children: [
      {
        path: '/',
        element: <Profile />,
      },
    {
      path: '/password',
      element: <UpdatePassword />
    },
    {
      path: '/booking',
      element: <BookingHistory />
    }
   
    ],
  },
  // {
  //   path: 'login',
  //   element: <Login/>,
  // },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>
}

