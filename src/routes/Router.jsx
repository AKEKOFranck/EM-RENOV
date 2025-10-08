import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Work from '../pages/Work';
import About from '../pages/About';
import Info from '../pages/Info';
import Project1 from '../ProjectPages/Project1';
import Project2 from '../ProjectPages/Project2';
import Project3 from '../ProjectPages/Project3';
import Project4 from '../ProjectPages/Project4';






const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/Work',
        element:<Work/>
      },
      {
        path:'/About',
        element:<About/>
      },
      {
        path:'/Info',
        element:<Info/>
      },
      {
        path:'/Project1',
        element:<Project1/>
      },
      {
        path:'/Project2',
        element:<Project2/>
      },
      {
        path:'/Project3',
        element:<Project3/>
      },
      {
        path:'/Project4',
        element:<Project4/>
      },

      
    ]
  }
]);

export default router;