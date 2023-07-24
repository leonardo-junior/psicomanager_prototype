import Head from 'next/head'

import { Home } from 'components/home/home'
import { Layout } from 'components/layout/layout'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Blog | Home</title>

        <meta name="description" content="Página de blog, com postagens" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="blog, novidades, informações"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Home />
      </Layout>
    </>
  )
}
