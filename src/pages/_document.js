import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>          
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="Portafolio Esteban Gonzalez"
          />
          <meta name="keywords" content="portafolio, nextjs, material-ui, react" />
          <meta name="author" content="Tu Nombre" />
          <link rel="icon" href="/favicon.ico" />          
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
