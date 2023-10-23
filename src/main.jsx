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
import DetailsData from './DetailsData/DetailsData';
import Provider from './Provider/Provider';
import Showdet from './Showdet/Showdet';
import Update from './update/Update';
import Resister from './Login/Resister';
import PR from './PrivateRoute/PR';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    errorElement:<Erro></Erro>,
    children:[
      {
        path:"/",
        element:<FirstHome></FirstHome>,
        loader:()=>fetch(`/data.json`)
      },
      {
        path: "/addcart",
        element:<PR><Addcard></Addcard></PR>
      },{
        path:"/log",
        element:<Login></Login>
      },
      {
        path:"/mycart",
        element:<PR><Mycart></Mycart></PR>,
        loader:()=>fetch('http://localhost:5000/dataforcard')
      },{
        path:"/over",
        element:<Overview></Overview>
      },{
        path:"/cont",
        element:<Contruct></Contruct>
      },{
        path:"/res",
        element:<Resister></Resister>
      },
      {
        path:"/detailsdata/:name",
        element:<PR><DetailsData></DetailsData></PR>,
         loader: ({params}) => fetch(`http://localhost:5000/dataforall/${params.name}`)
      },{
        path:"/dataforshow/:id",
        element:<PR><Showdet></Showdet></PR>,
        loader:({params})=>fetch(`http://localhost:5000/dataforshow/${params.id}`)
      },{
        path:"/updatedata/:id",
        element:<PR><Update></Update></PR>,
        loader: ({params}) => fetch(`http://localhost:5000/dataforupdateall/${params.id}`)
      }

    ]
  }
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
    <RouterProvider router={router}></RouterProvider>
    </Provider>

  </React.StrictMode>,
)

