import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import LogIn from './components/pages/LogIn.jsx';
import Register from './components/pages/Register.jsx';
import AuthProvider from './components/provdier/AuthProvider.jsx';
import ServiceDetails from './components/pages/ServiceDetails.jsx';
import CheckOut from './components/pages/CheckOut.jsx';
import Bookingd from './components/pages/Bookingd.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,

    children : [
       {

        path : "/",
        element : <Home></Home>


       }, 
       
       {
        path : "/logIn",
        element :  <LogIn></LogIn>

       },

       {

        path : "/Register",
        element : <Register></Register>
       },


       {
        path : "/serviceDetails/:id",
        element : <ServiceDetails></ServiceDetails>,
        loader : ({params}) => fetch (`http://localhost:5000/services/${params.id}`)
       },


       {

        path : "/checkOut/:id",
        element : <CheckOut></CheckOut>,
        loader : ({params}) => fetch (`http://localhost:5000/services/${params.id}`)


       },


       {

        path  : "/booking",
        element : <Bookingd></Bookingd>
       }
      
      
      ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
