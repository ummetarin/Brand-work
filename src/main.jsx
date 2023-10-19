import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home.jsx';
import Addcard from './Add card/Addcard.jsx';
import Login from './Login/Login.jsx';
import Mycart from './MyCart/Mycart.jsx';
import Overview from './Overview/Overview.jsx';
import Contruct from './contructInfo/Contruct.jsx';
import Erro from './Error/Erro';
import FirstHome from './Home/FirstHome';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    errorElement:<Erro></Erro>,
    children:[
      {
        path:"/",
        element:<FirstHome></FirstHome>
      },
      {
        path: "/addcart",
        element:<Addcard></Addcard>
      },{
        path:"/log",
        element:<Login></Login>
      },{
        path:"/mycart",
        element:<Mycart></Mycart>
      },{
        path:"/over",
        element:<Overview></Overview>
      },{
        path:"/cont",
        element:<Contruct></Contruct>
      }

    ]
  }
  
]);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

