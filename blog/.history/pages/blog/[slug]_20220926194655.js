import fs from 'fs'
import path from 'path'
 export default function  PostPage ()  {
  return (
    <Link href='/'>
    <a className='btn btn-back'>Go Back</a>
  </Link>
  <div className='card card-page'>
    <h1 className='post-title'>{title}</h1>
    <div className='post-date'>Posted on {date}</div>
    <img src={cover_image} alt='' />
    <div className='post-body'>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
    </div>
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
