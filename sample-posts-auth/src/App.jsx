import './App.css';
import { UserContext } from './providers/UserProvider';
import ProtectedRoute from './providers/ProtectedRoute';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Login from './components/Login';
import Posts from './components/Posts';
import Footer from './components/Footer';
import Header from './components/Header';
import SignUp from './components/SignUp';
import Message from './components/Message';
import ViewProfile from './components/ViewProfile';
import EditProfile from './components/EditProfile';
import ConfirmSignUp from './components/ConfirmSignUp';
import ChangePassword from './components/ChangePassword';
import ForgotPassword from './components/ForgotPassword';
import ConfirmForgotPassword from './components/ConfirmForgotPassword';


import { useContext, useEffect } from 'react';
import { getCookies } from './utils/userCookies';

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
        element: <Message message='Home Page. Unprotected Route'/>,
      },
      {
        path: '/posts',
        element: <ProtectedRoute>
          <Posts />
        </ProtectedRoute>,
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
        path: '/forgotpassword',
        element: <ForgotPassword />,
      },
      {
        path: '/confirmforgotpassword',
        element: <ConfirmForgotPassword />,
      },
      {
        path: '/changepassword',
        element: <ProtectedRoute>
          <ChangePassword />
        </ProtectedRoute>,
      },
      {
        path: '/editprofile',
        element: <ProtectedRoute>
          <EditProfile />
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
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    const jwt = getCookies();
    if (user === null && jwt !== undefined) {
      setUser(jwt); 
    }
  }, []);
  
  return <RouterProvider router={router} />;
}

export default App;
