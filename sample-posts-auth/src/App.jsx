import './App.css';
import UserProvider from './providers/UserProvider';
import ProtectedRoute from './providers/ProtectedRoute';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

//import Posts from './components/Posts';
import Login from './components/Login';
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
          <Message message='Logged in, posts endpoint is currently broken.'/>
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
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  )
}

export default App;
