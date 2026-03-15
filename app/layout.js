import Script from 'next/script';
import { EditModeProvider } from './context/EditModeProvider';

export const metadata = {
  title: "NFRG - Real Estate",
  description: "North Forty Realty Group",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="keywords" content="real estate, NFRG, North Forty Realty Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

        <link rel="stylesheet" href="/fonts/fonts.css" />
        <link rel="stylesheet" href="/fonts/font-icons.css" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" type="text/css" href="/css/styles.css" />
        <link rel="stylesheet" href="/css/custom.css" />

        <link rel="shortcut icon" href="/images/logo/favicon.png" />
        <link rel="apple-touch-icon-precomposed" href="/images/logo/favicon.png" />

        {/* jQuery must load before all other scripts */}
        <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
      </head>
      <body>
        <EditModeProvider>
          {children}
        </EditModeProvider>

        {/* Scripts in dependency order */}
        <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/js/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/js/jqueryui.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.nice-select.min.js" strategy="afterInteractive" />
        <Script src="/js/rangle-slider.js" strategy="afterInteractive" />
        <Script src="/js/countto.js" strategy="afterInteractive" />
        <Script src="/js/shortcodes.js" strategy="afterInteractive" />
        <Script src="/js/animation_heading.js" strategy="afterInteractive" />
        <Script src="/js/lazysize.min.js" strategy="afterInteractive" />
        <Script src="/js/carousel.js" strategy="afterInteractive" />
        <Script src="/js/plugin.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
