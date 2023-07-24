import { roboto } from 'components/common/fonts'
import { AlertModalContextProvider } from 'contexts/alertModalContext'
import type { AppProps } from 'next/app'
import 'styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={roboto.className}>
      <AlertModalContextProvider>
        <Component {...pageProps} />
      </AlertModalContextProvider>
    </div>
  )
}
