import Script from "next/script";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import config from "@/lib/config";
import { appThemeKey } from "@/lib/theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          {/* 👇 Here's the script */}
          <ColorModeScript initialColorMode={config.initialColorMode} />
          <Main />
          <NextScript />
          <Script id={appThemeKey} strategy="beforeInteractive">
            {`
  if (
    localStorage.getItem("${appThemeKey}") === "dark" ||
    (!("${appThemeKey}" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    localStorage.setItem("${appThemeKey}","dark")
    document.documentElement.classList.add("dark");
  } else {
    localStorage.setItem("${appThemeKey}","light")
    document.documentElement.classList.remove("dark");
  }
          `}
          </Script>
        </body>
      </Html>
    );
  }
}
