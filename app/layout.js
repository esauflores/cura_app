import "./globals.css";

export const metadata = {
  title: "Cura Healthcare App",
  description: "A healthcare app for managing your health",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
