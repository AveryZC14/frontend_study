import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
// import App from './App';
// import router from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider,Navigate } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import { Root } from './pages/Root';
import { Home } from './pages/Home';
import { About } from './pages/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
      path: "Home",
      element: <Home />,
    },
    {
      path: "About",
      element: <About />
    },
    // {
    //   path:"*",
    //   element:<Navigate to="/Home" replace />
    // }
  ]
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
