import '../styles/globals.scss';
import "bulma/bulma.sass";
import "@fortawesome/fontawesome-free/css/all.css";

import React from 'react';
import { Provider } from "next-auth/client"
import Header from '../components/layout/Header';

export default function App({Component, pageProps}) {
  return (
    <Provider 
    session={pageProps.session}>
      {
        Component.name == "LoginView" ? <Component {...pageProps}/> :
        <>
        <Header/>
        <Component {...pageProps}/>
        </>
      }
    </Provider>
  )
}
