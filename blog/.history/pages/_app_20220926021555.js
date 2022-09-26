import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
    <Head
<main className='container'>
<Component {...pageProps} />
</main>
</div>
  )
  
   
   
  }

export default MyApp
