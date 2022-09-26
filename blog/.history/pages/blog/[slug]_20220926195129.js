import fs from 'fs'
import path from 'path'
export default function PostPage({}) {
    return (
      <div>
        
      </div>
    )
  }
  export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))
  
    const paths = files.map((filename) => ({
      params: {
        slug: filename.replace('.md', ''),
      },
    }))
  
    return {
      paths,
      fallback: false,
    }

  }
export async function  getSaticProps({params:{slug}}){
    console
return{
    props:{

    }
}
}
