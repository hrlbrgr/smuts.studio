import Head from "next/head"
import Script from "next/script"

import "nextra-theme-blog/style.css"
import "../styles/main.css"
import "../styles/1ad9c07e-908d-4ede-8b95-c753dc644a5f.css"

export default function Nextra({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/InterDisplay-roman.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}