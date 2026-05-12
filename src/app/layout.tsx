import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
  display: "swap",
});

const calSans = localFont({
  src: "./fonts/CalSans-Regular.ttf",
  variable: "--font-cal-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VAS - Si vas, vamos.",
  description: "La app que te mueve sin comisiones. Registrate y ganá tu membresía.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${rethinkSans.variable} ${calSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
