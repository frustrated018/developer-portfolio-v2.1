import type { Metadata } from "next";
import "./globals.css";
import Kode_Mono from "@/fonts/fonts";

export const metadata: Metadata = {
  title: "Developer Portfolio V2",
  description: "The second iteration of my developer portfolio....",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`dark ${Kode_Mono.className}`}>
        <main className="relative flex min-h-screen flex-col">
          <div className="flex-1 flex-grow">{children}</div>
        </main>
      </body>
    </html>
  );
}
