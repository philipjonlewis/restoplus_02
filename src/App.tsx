import React from 'react';
import MainLayout from './layout/MainLayout';
import CounterPage from './pages/CounterPage';

const App = () => {
  return (
    <MainLayout>
      <CounterPage />
    </MainLayout>
  );
};

export default App;
