import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
    
<main className='container'>
<Component {...pageProps} />
</main>
</div>
  )
  
   
   
  }

export default MyApp
