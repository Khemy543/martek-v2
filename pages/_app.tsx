import '../styles/globals.css'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { store } from '../store/store';
import { Provider } from 'react-redux'

type NextPageWithLayout = NextPage & {
  getLayout ? : (page : ReactElement) => ReactNode
}

type AppPropsWithoutLayout = AppProps & {
  Component : NextPageWithLayout
}

function MyApp({ Component, pageProps } : AppPropsWithoutLayout) {
  // use the layout defined at page level if avaliable

  const getLayout = Component.getLayout ?? ((page) => page)

  return (
      <Provider store={store}>
        { getLayout(<Component {...pageProps} />)}
      </Provider>
  )
}

export default MyApp
