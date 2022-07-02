import React from "react";

export const containerSelector = "#app";

export default ({
  metadata: {
    build: { clientBundleFilePath },
    page: { title }
  },
  children
}) => (
  <html>
    <head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Roboto:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </head>
    <body>
      <div id={containerSelector.slice(1)}>
        {children}
      </div>
    </body>
    <script src={clientBundleFilePath} />
  </html>
);
