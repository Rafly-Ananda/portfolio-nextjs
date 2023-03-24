import "@/styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { AppProps } from "next/app";
import Providers from "./providers";
import Layout from "./components/layout";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Layout>
        <div>
          <Navbar />
          <Component {...pageProps} />
        </div>
        <Footer />
      </Layout>
    </Providers>
  );
}
