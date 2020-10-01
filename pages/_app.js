import '../styles/globals.css';
import "bulma/css/bulma.min.css";
import "../styles/navigation.scss";
import "@fortawesome/fontawesome-free/css/all.css";

import React from 'react';
import App from "next/app";
import Navigation from '../components/Navigation';

class MyApp extends App {

  static async getInitialProps(props) {
    const {Component, ctx} = props;
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {pageProps}
  }

  render() {
    const {Component, pageProps} = this.props;
    return (
      <>
      {
       (Component.name == "LoginView") ? <Component {...pageProps} /> : 
       <>
         <Navigation/>
         <div className="container">
           <Component {...pageProps} />
          </div>
        </>
      }
      </>
      )
  }
}

export default MyApp
