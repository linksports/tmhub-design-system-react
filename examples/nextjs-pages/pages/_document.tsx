import { Html, Head, Main, NextScript } from "next/document";
import { DesignProvider } from 'tmhub-design-system-react';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <DesignProvider theme="teamhub" asChild>
        <body>
          <Main />
          <NextScript />
        </body>
      </DesignProvider>
    </Html>
  );
}
