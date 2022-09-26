import fs from 'fs'
import path from 'path'
export default function PostPage({
   
  }) {
    return (
      <div>
        
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
  fallback:false
}
}
export async function  getSaticProps(){
return{
    props:{

    }
}
}
