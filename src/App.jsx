import React from 'react';
import './layout.scss';
import Homepage from './routes/homepage/Homepage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './routes/layout/Layout';
import { Listpage } from './routes/list/Listpage';
import Singlepage from './routes/singlepage/Singlepage';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Homepage />,
        },
        { path: '/list', element: <Listpage /> },
        { path: '/contact', element: <Homepage /> },
        { path: 'list/:id', element: <Singlepage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
