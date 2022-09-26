import Head from 'next/head'
import styles from '../styles/Home.module.css'
import fs from 'fs';
export default function Home( {posts} ) {
  return (
    <div >
      <Head>
        <title>Blog</title>
      </Head>
     <h2>Hello</h2>
  
    </div>
  )
}

export async function getStticProps()
{
  const files=fs.readirSync(path.join('posts'))
  //return array of object
  console.log(files);
  return{
    props:{
      posts:'The post'
    },
  }
}