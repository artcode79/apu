/** @format */

import { Html, Head, Main, NextScript } from "next/document";
import Side from "./components/Side";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Side>
          <Main />
          <NextScript />
        </Side>
      </body>
    </Html>
  );
}
