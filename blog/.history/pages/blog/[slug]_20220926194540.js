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
const paths=files.map((filename)=>({
    params:{
        slug: filename.replace('.md', ''),
    }
}))
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
