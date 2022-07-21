import type { AppProps } from 'next/app'
import {FC} from "react";
import '@Styles/main.scss';
import {SSRProvider} from 'react-bootstrap';
import RootLayout from '@View/layout/RootLayout';

const MyApp: FC<AppProps> | any = (props: AppProps | any) => {
  const {Component, pageProps, router} = props;
  const getLayout: any = Component.getLayout || ((page: FC) => page);

  return (
    <SSRProvider>
      <RootLayout>
        {getLayout(
          <Component {...pageProps} />
        )}
      </RootLayout>
    </SSRProvider>
  )
}

export default MyApp
