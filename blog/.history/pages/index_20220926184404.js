import Head from 'next/head'
import fs from 'fs'
import path
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

export async function getStaticProps()
{
  const files=fs.readdirSync()
  return{
    props:{
      posts:'The post'
    },
  }
}