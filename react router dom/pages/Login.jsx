import React, { useRef } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import styles from './Login.module.css'

const Login = () => {
     const username = useRef('')
     const password = useRef('')
     const navigate = useNavigate()
   const [searchParams,setSearchParams] = useSearchParams()
     const submitHandler=(e)=>{
        e.preventDefault();
        localStorage.setItem("loggedInfo",username.current.value)
        navigate("/profile")
    }
     
    
  return (
    <div className={`${styles.container}`} >
     <h1 >{searchParams.get("message")}</h1>
     <div className={`${styles.mainContainer}`}>
     <form className={`${styles.form}`} onSubmit={submitHandler}>
      <h2>LOGIN</h2>
 <input className={`${styles.input}`} type='text' placeholder='username' ref={username} />
 <input className={`${styles.input}`} type='password' placeholder='password' ref={password} />
 <button className={`${styles.button}`}>login</button>

        </form>
        </div>
    </div>
  )
}

export default Login