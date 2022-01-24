import Head from "next/head";
import { CMS_NAME, CMS_URL, HOME_OG_IMAGE_URL } from "../lib/constants";

export default function Meta() {
  return (
    <Head>
      <link
        rel="desde-crespo-icon"
        sizes="512x512"
        href="/favicon/desde-crespo-icon.png"
      />

      <link rel="manifest" href="/favicon/site.webmanifest" />

      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta property="og:url" content={CMS_URL} />
      <meta property="og:type" content="article" /> 
      <meta property="og:title" content={CMS_NAME} />
      <meta name="og:description" content={`Semanario digital - ${CMS_NAME}.`} />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="400" />
    </Head>
  );
}
