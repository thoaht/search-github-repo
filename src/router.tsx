import { createBrowserRouter } from 'react-router-dom';
import Home from 'components/pages/Home';
import About from 'components/pages/About';
import NotFoundPage from 'components/pages/404';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
