import '../styles/globals.scss';
import "bulma/bulma.sass";
import "@fortawesome/fontawesome-free/css/all.css";

import React from 'react';
import { Provider } from "next-auth/client"

export default function App({Component, pageProps}) {
  return (
    <Provider 
    session={pageProps.session}>
      <Component {...pageProps}/>
    </Provider>
  )
}
