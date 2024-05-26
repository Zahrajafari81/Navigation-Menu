import { redirect } from "react-router-dom"

export const AuthChecker =()=>{
    const resievedData=localStorage.getItem("loggedInfo")
    if(
        resievedData === null
    )
    throw redirect ('/login?message=avval login kon')
    else
    return resievedData;
}