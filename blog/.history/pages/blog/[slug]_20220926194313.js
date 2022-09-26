import React from 'react'
import fs from 'fs'
import path from 'path'
 export default function  PostPage ()  {
  return (
    <div>
      <h1>Post</h1>
    </div>
  )
}
export async function  getSaticPath(){
const files=fs.readFileSync(path.join('posts'))
return{
    paths:[{params:{slug:1}}]
}
}
export async function  getSaticProps(){
return{
    props:{

    }
}
}
