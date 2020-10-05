import '../styles/globals.css';
import "bulma/css/bulma.min.css";
import "../styles/navigation.scss";
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
        <main className="container main-container">
            <Component {...pageProps}/>
        </main>
        </>
      }
    </Provider>
  )
}
