import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Cocktail Explorer",
  description: "Search, discover, and favorite cocktails with smooth UX.",
  metadataBase: new URL("https://example.com"),
  openGraph: { title: "Cocktail Explorer", description: "Find your next favorite cocktail." },
  twitter: { card: "summary_large_image", title: "Cocktail Explorer" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Header />
        <main className="container py-8">{children}</main>
        <Footer />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
