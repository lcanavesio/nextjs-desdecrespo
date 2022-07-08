import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <script
            data-ad-client="ca-pub-7977550989248038"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-168027767-1"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-168027767-1', { page_path: window.location.pathname });
            `,
            }}
          />
          <meta name="google-site-verification" content="u8B_jRPxV9QEkABtRYRMUkTb8CuYZ8I29fPWnSzKEQ8" />
          <link rel='stylesheet' href='https://admin.desdecrespo.com.ar/wp-admin/load-styles.php?c=1&amp;dir=ltr&amp;load%5Bchunk_0%5D=dashicons,admin-bar,buttons,media-views,editor-buttons,wp-components,wp-block-editor,wp-nux,wp-editor,wp-block-library,wp-block-&amp;load%5Bchunk_1%5D=library-theme,wp-edit-blocks,wp-edit-post,wp-format-library,wp-block-directory,common,forms,admin-menu,dashboard,list-tables,edi&amp;load%5Bchunk_2%5D=t,revisions,media,themes,about,nav-menus,wp-pointer,widgets,site-icon,l10n,wp-auth-check,wp-color-picker&amp;ver=5.5.3' type="text/css" media='all' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
