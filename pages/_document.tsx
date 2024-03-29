import Script from "next/script";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { appThemeKey } from "@/lib/theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="duration-ease flex min-h-screen flex-col justify-between bg-gray-300 text-gray-800 transition dark:bg-gray-800 dark:text-gray-100">
          {/* 👇 Here's the script */}
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
