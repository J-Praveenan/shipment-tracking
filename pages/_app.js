import "../styles/globals.css";

// INTERNAL IMPORT
import {TrackingProvider} from "../Context/Tracking";
import { NavBar } from "../Components/NavBar";
import { Footer } from "../Components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <TrackingProvider>
        <NavBar/>
        <Component {...pageProps} />
      </TrackingProvider>
      <Footer/>
    </>
  );
}
