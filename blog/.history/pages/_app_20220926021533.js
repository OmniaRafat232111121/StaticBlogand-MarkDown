import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
<main className='con'>
<Component {...pageProps} />
</main>
  )
  
   
   
  }

export default MyApp
