import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Bulinuta } from "@/components/Bulinuta";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Urban Universe",
    description: "The clothing brand."
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <title>Urban Universe</title>
                <link rel="icon" href="/logo.png" />
            </head>
            <body className={inter.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
