
import { useState , useEffect } from "react";
import axiosInstance from "./axios"
export default function ShowUserDetail() {

  const [isLoading , setIsLoading] = useState(true)
  const [error , setError] = useState(false)
  const [userData , setUserData] = useState({
    name:"",
    username:"",
    email:""
  })
  useEffect(()=>{
    getData()
  } ,[setUserData])
  const getData = () =>{
      const controller = new AbortController();
      axiosInstance.post("/api/detail/" , {
        signal:controller.signal
      })
      .then((data) =>{
        setUserData({
            name : data.data.name,
            username : data.data.username,
            email : data.data.email
          }
          )
          console.log(data)
          setIsLoading(false)
      return controller.abort()
      }).catch((err)=>{
        setError(true)
          console.log("error is" , err)
      })
      return controller.abort()
    }

  return (
    <>
    <h2>User data is as follow</h2>
    {isLoading && <h2>Data is still loading</h2>}
    {( !isLoading && error ) && <h2>Error in authentication please check your credintials</h2> }
    <h1>Name {userData.name}</h1>
    <h1>email {userData.email}</h1>
    <h1>username {userData.username}</h1>
    </>
  )
}
