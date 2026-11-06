import { Html, Head, Main, NextScript } from 'next/document';
// https://nextjs.org/docs/messages/no-page-custom-font
// https://nextjs.org/docs/messages/google-font-display
// improve "<html> element does not have a [lang] attribute"
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
