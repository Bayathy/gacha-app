import '@/styles/globals.css'
// eslint-disable-next-line import/named
import { MantineProvider } from '@mantine/core'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'

import type { AppProps } from 'next/app'

export default function App(properties: AppProps) {
  const { Component, pageProps } = properties

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
      </Head>
      <RecoilRoot>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme: 'light',
          }}
        >
          <Component {...pageProps} />
        </MantineProvider>
      </RecoilRoot>
    </>
  )
}
