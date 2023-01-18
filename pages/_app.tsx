import "../styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "../layoutes/layout";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Header from "../Components/nav";
import "../styles/Home.scss";
import "../styles/Services.scss";
import "../styles/Aboutus.scss";
import "../styles/Career.scss";
import "../styles/Contactus.scss";
import "../styles/Faq.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainLayout>
        <Navbar />
        {/* <Header /> */}

        <Component {...pageProps} />
        <Footer />
      </MainLayout>
    </>
  );
}
