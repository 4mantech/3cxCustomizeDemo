import { ServerStyleSheets } from "@mui/styles";
import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default class CustomDoc extends Document {
  render() {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
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
