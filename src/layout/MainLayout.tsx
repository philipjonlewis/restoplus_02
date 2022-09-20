import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from '../store/store';
import { Provider } from 'react-redux';
import ProjectInformationDisplay from '../components/ProjectInformationDisplay';

const MainLayout = ({ children }) => {
  return (
    <Provider store={store}>
      <div className="bg-gray-100 min-h-screen text-white">
        <ProjectInformationDisplay />

        <div className="container mx-auto h-screen"> {children}</div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </Provider>
  );
};

export default MainLayout;
