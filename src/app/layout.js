import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ChatProvider from "../components/ChatProvider";
import InstallPWAButton from "../components/InstallPWAButton"; // new

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "codingskillhub",
  description: "Next.js app with chat",
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* Chat features handled in client provider */}
        <ChatProvider />

        {/* Install PWA Button */}
        <InstallPWAButton />

        {/* Portal div for ChatPopup */}
        <div id="chat-portal" />
      </body>
    </html>
  );
}
