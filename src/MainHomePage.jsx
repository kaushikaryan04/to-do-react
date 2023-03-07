import axiosInstance from './axios';
import React from 'react'
import Post from './components/Post';
import { useEffect , useState } from 'react'
export default function MainHomePage() {
  const [post , setPost] = useState();
  const [isLoading , setIsLoading] = useState(true);
  const [error , setError] = useState(false);
  useEffect(()=>{
      const controller = new AbortController()
      axiosInstance.post('api/getodo/' , {signal:controller.signal})
        .then((res)=>{
            setPost(res.data)
            setIsLoading(false)
            // console.log("post is " ,post)
        })
        .catch((err)=>{
          console.log("err is " , err)
          setError(true)
        })
        return controller.abort()
    } ,[setPost])

  return (
    <>
    {isLoading && <h2>Give use a minute we are fetching from server or login again</h2>}
    {error&& <h2>Error in authentication please check your credintials</h2> }
        {(post)  && post.map((p) =>{ return (
          <div key = {p.id}>

            <Post id = {p.id} title = "title" content = {p.content} priority = {p.priority}  isDone = {p.is_done} />

          </div>
        )
        })
      }
    </>
  )
}
