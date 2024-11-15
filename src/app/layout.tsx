import type { Metadata } from "next";
import "../globals.css";
import "../themes/dark.css";
import "../themes/dark-mc.css";
import "../themes/dark-hc.css";
import "../themes/light.css";
import "../themes/light-mc.css";
import "../themes/light-hc.css";
import { Sidebar } from "@/components/Sidebar";
import { servers } from "@/dummy/servers";

export const metadata: Metadata = {
  title: "Gryt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark bg-background text-on-background"
      style={{
        fontFamily: "var(--md-ref-typeface-brand)",
      }}
    >
      <body className="w-screen h-screen flex gap-4 overflow-hidden p-4">
        <Sidebar servers={servers} />
        <div className="w-full h-full">{children}</div>
      </body>
    </html>
  );
}
