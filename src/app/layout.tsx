import "./globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import clsx from "clsx";

const display = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "LocalTrainer | Private Offline AI Assistant",
  description: "LocalTrainer is a private, offline, trainable AI assistant with customizable model pipelines and local-first privacy guarantees.",
  metadataBase: new URL("https://agentic-e61a7a44.vercel.app")
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={clsx("bg-surface", display.variable, mono.variable)}>
        {children}
      </body>
    </html>
  );
}
