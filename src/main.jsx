import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import Protfolio from './Pages/Protfolio.jsx';
import RootLayout from './Components/Layouts/RootLayout.jsx';
import Contact from './Pages/Contact.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<RootLayout />}
      >

        <Route index element={<Home />} />



      </Route>
      <Route path='/portfolio' element={<Protfolio />} />
      <Route path='/contact' element={<Contact />} />
    </>
  )
);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
