import Head from 'next/head'
import fs from 'fs'
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
  
  return{
    props:{
      posts:'The post'
    },
  }
}