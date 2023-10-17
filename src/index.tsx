import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ResultMenu from './components/ResultMenu';
import LoadingApp from './components/LoadingApp';
import MenusApp from './components/MenusApp';
import LoginApp from './components/LoginApp';
import CreateAccoutApp from './components/CreateAccoutApp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "resultMenu/:id",
    element: <ResultMenu />
  },
  {
    path: "/loading",
    element: <LoadingApp />
  },
  {
    path: "/menus",
    element: <MenusApp />
  },
  {
    path: "/login",
    element: <LoginApp />
  },
  {
    path: "/createAccout",
    element: <CreateAccoutApp />
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
