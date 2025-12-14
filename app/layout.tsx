import type { Metadata } from "next";
import "./globals.css";



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
        {children}
      </body>
    </html>
  );
}
