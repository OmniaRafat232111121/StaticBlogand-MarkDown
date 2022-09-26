import Head from 'next/head'
import fs from 'fs'
import path from 'path'
export default function Home( {posts} ) {
  console.log(posts)
  return (
    <div >
      <Head>
        <title>Blog</title>
      </Head>
     <h2>Hello</h2>
  
    </div>
  )
}

export async function getStaticProps(){
  //get file from posts dir
  const files=fs.readdirSync(path.join('posts'))
   //Get slug and frontmatter from posts
   const posts=files.map(filename=)
  return{
    props:{
      posts:'The post'
    },
  }
}