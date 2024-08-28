"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
      // Update UI to notify the user they can install the PWA
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        setDeferredPrompt(null); // Clear the saved event
        setIsInstallable(false); // Hide the install button
      });
    }
  };

  return (
    <div className="relative flex min-h-screen w-screen flex-col overflow-hidden bg-purple-gradient text-center text-white">
      <h1 className="mt-10">Welcome world</h1>
      {isInstallable && (
        <button
          id="install"
          onClick={handleInstallClick}
          type="button"
          className="mb-2 me-2 mt-6 rounded-lg bg-purple-800 px-7 py-5 text-2xl font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-600 md:px-5 md:py-2.5 md:text-xl"
        >
          Install
        </button>
      )}
    </div>
  );
}
