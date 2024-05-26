import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SingleProduct from "../pages/SingleProduct";
import Login from "../pages/Login";
import Products from "../pages/Products";
import ContactUs from "../pages/ContactUs";
import Category from "../pages/Category";
import Saremah from "../pages/Saremah";
import ProtectedLayout from "../layout/ProtectedLayout";
import Profile from "../pages/Profile";
import LoaddinErrorPAge from "../pages/LoaddinErrorPAge";
import { AuthChecker } from "./Routing/Loaders/AuthLoader";
import NotFound from "../pages/NotFound";
import MainLayout from "../layout/MainLayout";

 export const MainRouter=createBrowserRouter([
    {element:<MainLayout /> , children:[
{path:"/" , element:<App />},
{path:"/products/:productId" , element:<SingleProduct />},
{path:"/login" , element:<Login/>},
{path:"/products" ,
 element:<Products /> ,
 loader:()=> fetch("http://localhost:9090/products"),
errorElement:<LoaddinErrorPAge />
},
{path:"/contactus" , element:<ContactUs />},
// {element:<Category />, children:[
// { path:"/aghsati", element:<Aghsati /> },
// { path:"/saremah", element:<Saremah /> }


// ]}

{element:<ProtectedLayout /> ,

loader:AuthChecker , 
children:[
    {path:"profile", element:<Profile />},
   
]},

]},
 {path:"*" ,element:<NotFound />}


 
])