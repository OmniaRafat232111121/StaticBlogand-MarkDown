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
const paths=file
return{
  paths,
}
}
export async function  getSaticProps(){
return{
    props:{

    }
}
}
