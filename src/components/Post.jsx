import React from 'react'
import "../styles/post.css"
import { BsFillTrashFill } from "react-icons/bs";
import axiosInstance from '../axios';
export default function Post({ id ,title , content , priority , isDone}) {
  const handleDelete = () =>{
    axiosInstance.delete(`http://127.0.0.1:8000/api/delete/${id}/`)
      .then((res)=>{
        console.log("delete successfull" ,res)
      })
      .catch((err)=>{
        console.log("error" , err)
      })
      // return controller.abort()
  }
  return (
    <>
    <div className="post-main">
        <div className="post-heading">
            <h2>{title}</h2>
        </div>
        <div className="post-desc">
          <p>{content}</p>
        </div>
        <div className="post-priority">
          <p>{priority}</p>
        </div>
        <div className="post-check">
           {isDone && <input defaultChecked type = "checkbox" />}
           {!(isDone) && <input type = "checkbox"/>}
        </div>
        <div className="post-delete">
           Delete <BsFillTrashFill onClick = {() => handleDelete()}/>
            </div>
    </div>
    </>
  )
}
