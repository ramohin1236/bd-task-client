import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import SingleItem from "../pages/SingleItem";
import SignIn from "../pages/SignIn";
import SignUP from "../pages/SignUP";
import { AddProduct } from "../pages/AddProduct";




  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/shop',
            element: <Shop/>
        },
        {
            path: '/product/:id',
            element: <SingleItem/>,
            loader: ({params})=>fetch(`http://localhost:8000/product/${params.id}`)
        },
        {
            path: '/sign-up',
            element: <SignUP/>
        },
        {
            path: '/signin',
            element: <SignIn/>
        },
        {
            path: '/product-add',
            element: <AddProduct/>
        },
    ]
   
    }
  ]);

export default router