import "../styles/index.css";
import "../styles/clicme.css";
import "../styles/social.css";
import "react-jinke-music-player/assets/index.css";
import dynamic from "next/dynamic";
const ActiveRadio = dynamic(() => import("../components/radio/activeRadio"), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ActiveRadio />
    </>
  );
}

export default MyApp;
