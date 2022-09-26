import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
      </Head>
     <h2>Hello</h2>
    </div>
  )
}

export async function getS