import type { Metadata } from "next";
import "../globals.css";
import '../themes/dark.css'
import '../themes/dark-mc.css'
import '../themes/dark-hc.css'
import '../themes/light.css'
import '../themes/light-mc.css'
import '../themes/light-hc.css'

export const metadata: Metadata = {
  title: "Gryt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='dark bg-surface' style={{
      fontFamily: 'var(--md-ref-typeface-brand)',
    }}>
      <body>{children}</body>
    </html>
  );
}
