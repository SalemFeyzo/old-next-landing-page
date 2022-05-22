import Popup from "components/Popup";
import "react-multi-carousel/lib/styles.css";
import "react-modal-video/css/modal-video.min.css";
import "rc-drawer/assets/index.css";
import "typeface-dm-sans";
import "assets/privacy-policy/privacy-policy.css";

export default function CustomApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Popup />
    </>
  );
}
