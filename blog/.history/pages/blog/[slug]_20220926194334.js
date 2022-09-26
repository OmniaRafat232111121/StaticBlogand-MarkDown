import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'
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
