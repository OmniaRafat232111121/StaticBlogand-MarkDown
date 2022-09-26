import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'
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
 // Get files from the posts dir
 const files = fs.readdirSync(path.join('posts'))

 // Get slug and frontmatter from posts
 const posts = files.map((filename) => {
   // Create slug
   const slug = filename.replace('.md', '')

   // Get frontmatter
    const markdownWithMeta=fs.readFileSync(path.join('posts',filename),)
   return {
     slug,
    
   }
 })

 return {
   props: {
     posts: posts
   },
 }
}