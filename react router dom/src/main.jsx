import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, NavLink, Route, RouterProvider, Routes } from 'react-router-dom'
import Products from '../pages/Products.jsx'
import ContactUs from '../pages/ContactUs.jsx'
import SingleProduct from '../pages/SingleProduct.jsx'
import Category from '../pages/Category.jsx'
import Aghsati from '../pages/Aghsati.jsx'
import Saremah from '../pages/Saremah.jsx'
import Login from '../pages/Login.jsx'
import ProtectedLayout from '../layout/ProtectedLayout.jsx'
import Profile from '../pages/Profile.jsx'
import { MainRouter } from './MainRouter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(


  
//   <BrowserRouter>
//   <NavLink to="/">Home</NavLink>|
//    <NavLink to="/products">products</NavLink>|
//    <NavLink to="/contactUs">contact us</NavLink>|
  
//   <Routes>
//     <Route path='/' element={<App/>} />
//     <Route path='/products/:productId' element={<SingleProduct />} />
//     <Route path='/contactUs' element={<ContactUs />} />
//     <Route path='/login' element={<Login />} />
    

//     <Route path='/products' element={<Products />} />
//     <Route path='/category' element={<Category />}>
// <Route  path='aghsati' element={<Aghsati />}/>
// <Route  path='saremah' element={<Saremah />}/>

//     </Route>
//     <Route element={<ProtectedLayout />}>

// <Route path='profile'  element={<Profile />}/>

//     </Route>
    
//     </Routes>
//     </BrowserRouter>
 
<RouterProvider  router={MainRouter}/>)
