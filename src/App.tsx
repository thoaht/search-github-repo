import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import styles from './App.module.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import router from './router';

const queryClient = new QueryClient();
const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.app}>
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  );
};

export default App;
