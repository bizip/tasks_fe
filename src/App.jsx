import { useLayoutEffect } from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import isAuth from './helpers/isAuth';
import LoginActivity from './modules/Activities/LoginActivity';
import TasksActivities from './modules/Activities/TasksActivities';
import NewTaskActivity from './modules/Activities/NewTaskActivity';

const user = isAuth();

const router = createBrowserRouter([
  {
    path: '/',
    element: <TasksActivities />,
    // loader() {
    //   if (!user) {
    //     throw redirect('/Login');
    //   }
    //   return <div>Loading...</div>;
    // },
  },

  {
    path: '/login',
    element: <LoginActivity />,
    loader() {
      if (user) {
        throw redirect('/');
      }
      return <div>Loading...</div>;
    },
  },
  {
    path: '/new',
    element: <NewTaskActivity />,
    loader() {
      if (user) {
        throw redirect('/');
      }
      return <div>Loading...</div>;
    },
  },
]);

const App = () => {
  const theme = useSelector((state) => state.theme.theme);
  useLayoutEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('light');
    } else if (theme === 'system') {
      const systemTheme = window.matchMedia(
        '(prefers-color-scheme: light)',
      ).matches
        ? 'light'
        : 'light';
      document.documentElement.classList.add(systemTheme);
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer theme={theme === 'dark' ? 'dark' : 'light'} />
    </div>
  );
};
export default App;
