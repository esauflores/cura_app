import "./globals.css";

export const metadata = {
  title: "Cura Healthcare App",
  description: "A healthcare app for managing your health",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/logo_white.ico" />
        <link rel="manifest" href="/manifest.webmanifest" crossorigin="use-credentials" />
      </head>
      <body>{children}</body>
    </html>
  );
}
