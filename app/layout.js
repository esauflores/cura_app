import "./globals.css";

export const metadata = {
  title: "Cura Healthcare App",
  description: "A healthcare app for managing your health",
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/logo_combined.ico" />
        <link
          rel="manifest"
          href="/manifest.json"
          crossOrigin="use-credentials"
        />
        <meta name="theme-color" content="#4F469C" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body>
        <div className="safe-area-content">{children}</div>
        <script src="/js/flowbite.min.js" defer></script>
      </body>
    </html>
  );
}
