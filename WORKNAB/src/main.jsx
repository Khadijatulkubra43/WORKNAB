import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Aboutus from './Components/Aboutus.jsx'
import Feature from './Components/Feature.jsx'
import Availablejobs from './Components/Avialablejobs.jsx'
import Wherewework from './Components/Wherewework.jsx'
import Glazier from './Components/Glazier.jsx'
import Generallabour from './Components/Generallabour.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "aboutus",
    element: <Aboutus />,
  },
  {
    path: "feature",
    element: <Feature />,
  },
  {
    path: "availablejobs",
    element: <Availablejobs />,
  },
  {
    path: "wherewework",
    element: <Wherewework />,
  },
  {
    path: "glazier",
    element: <Glazier />,
  },
  // {
  //   path: "generallabour",
  //   element: <Generallabour/>,
  // },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)

