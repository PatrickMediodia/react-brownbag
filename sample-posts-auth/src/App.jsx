import './App.css';
import UserProvider from './providers/UserProvider';

import Login from './components/Login';
import Posts from './components/Posts';
import Footer from './components/Footer';
import Header from './components/Header';
import SignUp from './components/SignUp';
import Message from './components/Message';
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
        element: <Posts />
      },
      {
        path: '/login',
        element: <Login />,
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
        element: <ChangePassword />,
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
