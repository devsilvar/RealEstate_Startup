import { useEffect, useState, useRef } from 'react';
import './layout.scss';
import Homepage from './routes/homepage/Homepage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './routes/layout/Layout';
import { Listpage } from './routes/list/Listpage';
import Singlepage from './routes/singlepage/Singlepage';
import Profile from './routes/profile/Profile';

const App = () => {
  const [scrollTop, setscrollTop] = useState(0);
  const navvs = useRef(null);
  useEffect(() => {
    console.log(scrollTop);

    const onScroll = (e) => {
      setscrollTop((prev) => prev + 1);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout refs={navvs} />,
      children: [
        {
          path: '/',
          element: <Homepage />,
        },
        { path: '/list', element: <Listpage /> },
        { path: '/contact', element: <Homepage /> },
        { path: 'list/:id', element: <Singlepage /> },
        { path: '/profile', element: <Profile /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
