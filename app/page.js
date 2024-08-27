"use client";
import Image from "next/image";

import { useState } from "react";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setTimeout(() => {
      setCurrentStep(0);
      setIsAnimating(false);
    }, 1000); // Adjust time to match your animation duration
  };

  return (
    <div className="relative flex min-h-screen w-screen flex-row overflow-hidden bg-purple-gradient text-center text-white">
      <div
        className={`invisible absolute left-2/3 top-[15vh] flex w-full flex-col items-center opacity-0 ease-in-out sm:left-1/3 ${currentStep == 0 ? "!visible !left-0 opacity-100" : ""} ${isAnimating && currentStep == 0 ? "transition-[transform, shadow] !visible -translate-x-2/3 transform !opacity-0 duration-1000 sm:-translate-x-1/3" : ""}`}
      >
        <Image
          src="/icons/logo_white.ico"
          alt="logo"
          width={100}
          height={100}
          className="pointer-events-none h-[15vh] w-auto sm:h-[20vh]"
          priority
        />
        <h1>Cura</h1>
        <h3 className="mt-12">
          Connecting you <br />
          to Premium Healthcare
        </h3>
      </div>

      <div
        className={`invisible absolute left-2/3 top-[15vh] flex w-full flex-col items-center opacity-0 ease-in-out sm:left-1/3 ${currentStep == 1 ? "!visible !left-0 opacity-100" : ""} ${isAnimating && currentStep == 1 ? "transition-[transform, shadow] !visible -translate-x-2/3 transform !opacity-0 duration-1000 sm:-translate-x-1/3" : ""} ${isAnimating && currentStep == 0 ? "transition-[transform, shadow] !visible !left-2/3 -translate-x-2/3 transform opacity-100 duration-1000 sm:!left-1/3 sm:-translate-x-1/3" : ""}`}
      >
        <Image
          src="/icons/logo_white.ico"
          alt="logo"
          width={100}
          height={100}
          className="pointer-events-none h-[15vh] w-auto sm:h-[20vh]"
          priority
        />
        <h1>Cura</h1>
        <h3 className="mt-12">
          Connecting you <br />
          to Premium Healthcare
        </h3>
      </div>

      <div className="mt-[55vh] flex w-full flex-row items-center justify-center">
        <ul className="absolute bottom-[5.5rem] left-10 flex items-center gap-1 sm:static">
          <li className="h-2 w-10 rounded-full bg-white text-base font-normal text-gray-900"></li>
          <li className="h-2 w-2 rounded-full bg-gray-300 text-base font-normal text-gray-900 opacity-50"></li>
          <li className="h-2 w-2 rounded-full bg-gray-300 text-base font-normal text-gray-600 opacity-50"></li>
          <li className="h-2 w-2 rounded-full bg-gray-300 text-base font-normal text-gray-600 opacity-50"></li>
        </ul>

        {/* <button className="bg-white rounded-full w-16 h-16 flex items-center justify-center absolute left-8 bottom-16 sm:mt-12 ">
          <Image src="/icons/left-arrow.svg" alt="left arrow" width={30} height={30} />
        </button> */}
        <button
          className="absolute bottom-16 right-8 flex h-16 w-16 items-center justify-center rounded-full bg-white sm:static sm:ml-16"
          onClick={handleNext}
        >
          <Image
            src="/icons/right-arrow.svg"
            alt="right arrow"
            width={30}
            height={30}
          />
        </button>
      </div>
    </div>
  );
}
