import '../styles/globals.css';
import "bulma/css/bulma.min.css";
import "../styles/navigation.scss";

import Navigation from '../components/Navigation';

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Navigation/>
  <div className="container">
    <Component {...pageProps} />
  </div>
  </>
  )
}

export default MyApp
