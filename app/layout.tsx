import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider, SignIn } from "@clerk/nextjs";
import { dark, neobrutalism, shadesOfPurple } from "@clerk/themes";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Intelli Agents",
    description: "Build and deploy vertical AI agents for your business",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <html lang="en" className="dark">
                <body className={`${inter.className} bg-black min-h-screen`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
