import localFont from "next/font/local";
import Script from "next/script";

import { GTM_KEY, YA_METRIKA_KEY } from "@/shared/config";
import "../shared/styles/site/global.css";

const myFont = localFont({
  src: [
    {
      path: "../shared/styles/fonts/ysabeauoffice/YsabeauOffice-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../shared/styles/fonts/ysabeauoffice/YsabeauOffice-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../shared/styles/fonts/ysabeauoffice/YsabeauOffice-Regular.woff2",
      weight: "normal",
      style: "normal",
    },
    {
      path: "../shared/styles/fonts/ysabeauoffice/YsabeauOffice-Italic.woff2",
      weight: "normal",
      style: "italic",
    },
    {
      path: "../shared/styles/fonts/ysabeauoffice/YsabeauOffice-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../shared/styles/fonts/ysabeauoffice/YsabeauOffice-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../shared/styles/fonts/ysabeauoffice/YsabeauOffice-Bold.woff2",
      weight: "bold",
      style: "normal",
    },
    {
      path: "../shared/styles/fonts/ysabeauoffice/YsabeauOffice-BoldItalic.woff2",
      weight: "bold",
      style: "italic",
    },
  ],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />
        <link rel="preload" as="image" href="/icons/sprite.svg" />
        <Script rel="preload" src="/scripts/theme.js?v=1"></Script>
      </head>
      <body className={myFont.className}>{children}</body>
      {YA_METRIKA_KEY && (
        <Script
          id="show-banner-metrika"
          dangerouslySetInnerHTML={{
            __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date(); for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }} k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(${YA_METRIKA_KEY}, "init", { webvisor:true, clickmap:true, trackLinks:true, accurateTrackBounce:true });`,
          }}
        />
      )}
      {GTM_KEY && (
        <Script
          id="show-banner-gtm"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){console.info('${GTM_KEY}');w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_KEY}');`,
          }}
        />
      )}
    </html>
  );
}
