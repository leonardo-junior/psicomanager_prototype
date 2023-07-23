import { roboto } from 'components/common/fonts'
import type { AppProps } from 'next/app'
import 'styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={roboto.className}>
      <Component {...pageProps} />
    </div>
  )
}
