import "react-multi-carousel/lib/styles.css";
import "react-modal-video/css/modal-video.min.css";
import "rc-drawer/assets/index.css";
import "typeface-dm-sans";
import Layout from "components/layout";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Popup from "components/Popup";

export default function CustomApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="TECHOMODɅ" />

        <Component {...pageProps} />
      </Layout>
      <Popup />
    </ThemeProvider>
  );
}
