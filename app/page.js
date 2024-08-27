"use client";
import { useState, useEffect } from 'react';
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

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        setDeferredPrompt(null); // Clear the saved event
        setIsInstallable(false); // Hide the install button
      });
    }
  };

  return (
    <div className="text-center">
      <header className="bg-purple-gradient min-h-screen pt-[20vh] flex flex-col items-center text-white text-[calc(10px+2vmin)]">
        <Image src="/icons/logo_white.ico" alt="logo" width={100} height={100} className="pointer-events-none h-[20vh] w-auto" />

        <h1>Cura</h1>

        <h3 className='mt-10'>
          Connecting you <br />
          to Premium Healthcare
        </h3>

        {isInstallable && (
          <button id="install" onClick={handleInstallClick} type="button" className="mt-6 text-white bg-purple-500 hover:bg-purple-700 focus:ring-4 focus:ring-purple-600 font-medium rounded-lg me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 px-7 py-5 text-2xl md:px-5 md:py-2.5 md:text-xl">
            Install
          </button>
        )}
      </header>
    </div>
  );
}
