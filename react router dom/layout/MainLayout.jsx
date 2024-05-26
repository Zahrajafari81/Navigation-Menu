import React from 'react'
import { Link, Outlet, useNavigation } from 'react-router-dom'
import styles from "./MainLayout.module.css"
import Products from '../pages/Products'
const MainLayout = () => {
    const navigation=useNavigation()
  return (
    
    <>

 <header>
 <div className={`${styles.button}`}>

<ul><li>
  <a href='/login'>ورود</a>
  </li></ul>

</div>

<div className={`${styles.rightSection}`}>

<div className={`${styles.menu}`}>
<ul className={`${styles.menuItems}`}>
<li>
    <a href='/contactus'>تماس با ما </a>
</li>
<li>
   <a href='/products'> محصولات</a>
</li>






</ul>



</div>
<div className={`${styles.logo}`}> this is logo</div>



</div>





 </header>



 <Outlet />
    </>
  )
}

export default MainLayout