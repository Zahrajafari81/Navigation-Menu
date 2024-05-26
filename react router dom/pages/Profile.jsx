import React from 'react'
import styles from './Profile.module.css'

const Profile = () => {
  return (
   
    <div className={`${styles.container}`}>
     <h1> {`this is page ${localStorage.getItem("loggedInfo")} profile`}</h1>
   
    </div>
    
  
  )
}

export default Profile