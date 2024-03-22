import './App.css';
import UserProvider from './providers/UserProvider';
import ProtectedRoute from './providers/ProtectedRoute';

import Login from './components/Login';
import Posts from './components/Posts';
import Footer from './components/Footer';
import Header from './components/Header';
import SignUp from './components/SignUp';
import Message from './components/Message';
import ViewProfile from './components/ViewProfile';
import ConfirmSignUp from './components/ConfirmSignUp';
import ChangePassword from './components/ChangePassword';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

function Layout() {
  return (
      <>
        <Header />
        <div className='content-body'>
          <Outlet />
        </div>
        <Footer />
      </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: 
        <ProtectedRoute>
          <Posts />
        </ProtectedRoute>
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/profile',
        element: <ProtectedRoute>
          <ViewProfile />
        </ProtectedRoute> ,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/confirmsignup',
        element: <ConfirmSignUp />,
      },
      {
        path: '/changepassword',
        element: <ProtectedRoute>
          <ChangePassword />
        </ProtectedRoute>,
      },
      {
        path: '*',
        element: <Message  message={'Route 404. Not a valid route.'} />,
      }
    ]
  }]
);

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  )
}

export default App;
