import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({posts}) {
  return (
    {console.log(posts)}
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
      </Head>
     <h2>Hello</h2>
    </div>
  )
}

export async function getStticProps()
{
  return{
    props:{
      posts:'the post'
    }
  }
}