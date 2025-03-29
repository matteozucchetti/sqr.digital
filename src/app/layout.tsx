import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/lib/convex-client-provider";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Square",
  description: "Digitalizza le informazioni turistiche della tua attività",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexAuthNextjsServerProvider>
      <html lang="it">
        <body className={`${quicksand.variable} antialiased font-body`}>
          <ConvexClientProvider>{children}</ConvexClientProvider>
        </body>
      </html>
    </ConvexAuthNextjsServerProvider>
  );
}
