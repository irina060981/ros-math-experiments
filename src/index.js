import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import Home from '@pages/Home.jsx';
import Examples, {
  loader as examplesGroupLoader,
} from '@pages/Examples.jsx';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "examples/:examplesGroupId",
    element: <Examples />,
    loader: examplesGroupLoader
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <NavBar />
    <main className='app-content'>
      <RouterProvider router={router} />
    </main>
    <Footer />
  </>
);

