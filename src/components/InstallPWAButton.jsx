"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function InstallPWAButton() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsVisible(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    setDeferredPrompt(null);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return createPortal(
    <button
      onClick={handleInstall}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 px-8 py-3 rounded-full 
                 bg-gradient-to-r from-pink-500 to-purple-600 
                 text-white font-bold shadow-lg hover:opacity-90 
                 transition flex items-center gap-2"
    >
      DOWNLOAD
      <span className="text-xl">⬇️</span>
    </button>,
    document.body
  );
}
