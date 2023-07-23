import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import 'styles/globals.scss'

const roboto = Roboto({
  weight: ['400', '500'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={roboto.className}>
      <Component {...pageProps} />
    </div>
  )
}
