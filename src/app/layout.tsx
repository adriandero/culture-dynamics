import "./globals.css";

import FlyonuiScript from "../components/FlyonuiScript";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen w-screen w-full justify-center flex bg-base-100">
        {children}
      </body>
      <FlyonuiScript />
    </html>
  );
}
