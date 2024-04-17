import './App.css';
import { useContext, useEffect } from 'react';
import { getCookies } from './utils/userCookies';
import { UserContext } from './providers/UserProvider';
import ProtectedRoute from './providers/ProtectedRoute';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Message from './components/Message';

import Login from './pages/Login';
import Posts from './pages/Posts';
import SignUp from './pages/SignUp';
import ViewProfile from './pages/ViewProfile';
import EditProfile from './pages/EditProfile';
import ConfirmSignUp from './pages/ConfirmSignUp';
import ChangePassword from './pages/ChangePassword';
import ForgotPassword from './pages/ForgotPassword';
import ConfirmForgotPassword from './pages/ConfirmForgotPassword';

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
