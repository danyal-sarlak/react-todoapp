import React, {useState} from 'react'


export default function Postes() {

    const [posts , setposts] = useState([
     {id:1 , title:'js'},   
     {id:1 , title:'React'},   
     {id:1 , title:'Vue'},   
     {id:1 , title:'Node js'}   
    ])
  return (
    <div>
        {posts.map(post=>(
            <>
             <a href="">{post.title}</a>
            <hr />
            </>
        ))}
    </div>
  )
}
