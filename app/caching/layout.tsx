import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Caching Demo",
  description: "Nextjs caching demo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid place-content-center min-h-screen">
      {children}
      <div className="flex justify-center space-x-4 mt-4">
        <Link href="/caching/1">1</Link>
        <Link href="/caching/2">2</Link>
        <Link href="/caching/3">3</Link>
      </div>
    </div>
  );
}
