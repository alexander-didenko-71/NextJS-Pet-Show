import { Layout } from '@/components/common';
import '@/styles/app.scss';
import { AppProps } from 'next/dist/next-server/lib/router/router';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp