import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
<main className='conta'>
<Component {...pageProps} />
</main>
  )
  
   
   
  }

export default MyApp
