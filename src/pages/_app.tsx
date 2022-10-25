import '../styles/App.scss'
import '../styles/var.scss'
import '../styles/normalize.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
