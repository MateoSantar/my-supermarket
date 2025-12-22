import type { Metadata } from "next";
import "./globals.css";
import NextAuthProviders from "./components/Providers";



export const metadata: Metadata = {
  title: "My Supermarket",
  description: "Supermarket managment app",
  authors:{name:"Mateo Santarsiero"}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <NextAuthProviders>
          {children}
        </NextAuthProviders>
      </body>
    </html>
  );
}
