import '@/styles/globals.css'
import { QuiscoPrivider } from '@/context/QuioscoProvider'

export default function App({ Component, pageProps }) {
  return (
    <QuiscoPrivider>
      <Component {...pageProps} />
    </QuiscoPrivider>
  )
}
