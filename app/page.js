"use client";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Index() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();

  const handleNext = () => {
    if (isAnimating) return;

    if (currentStep == 3) {
      router.push("/home");
      return;
    }

    setIsAnimating(true);
    setTimeout(() => {
      setCurrentStep(currentStep + 1);
      setIsAnimating(false);
    }, 1000); // Adjust time to match your animation duration
  };

  return (
    <div className="relative flex min-h-screen w-screen flex-row overflow-hidden bg-purple-gradient text-center text-white">
      {/* Step 1: Cura Logo */}
      <div
        className={`invisible absolute left-full top-[15vh] flex w-full flex-col items-center opacity-0 ease-in-out sm:left-1/3 ${currentStep == 0 ? "!visible !left-0 opacity-100" : ""} ${isAnimating && currentStep == 0 ? "transition-[transform, shadow] !visible -translate-x-full transform !opacity-0 duration-1000 sm:-translate-x-1/3" : ""}`}
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

      {/* Step 2: Choose your desire package */}
      <div
        className={`invisible absolute left-full top-[5vh] flex w-full flex-col items-center opacity-0 ease-in-out sm:left-1/3 ${currentStep == 1 ? "!visible !left-0 opacity-100" : ""} ${isAnimating && currentStep == 1 ? "transition-[transform, shadow] !visible -translate-x-full transform !opacity-0 duration-1000 sm:-translate-x-1/3" : ""} ${isAnimating && currentStep == 0 ? "transition-[transform, shadow] !visible !left-full -translate-x-full transform opacity-100 duration-1000 sm:!left-1/3 sm:-translate-x-1/3" : ""}`}
      >
        <div className="relative mx-auto flex h-[50vh] w-full flex-row items-center justify-center gap-8">
          <div className="relative z-10 w-[250px] max-w-sm rounded-lg border-2 border-gray-200 bg-white text-left shadow-big">
            <div className="rounded-t-lg bg-[#938ae5] p-4">
              <p className="text-base font-medium leading-5">
                Standard Package
              </p>
              <p className="mt-1 text-sm font-normal leading-4">1000 Baht</p>
              <p className="mb-1 mt-2 text-xs font-normal leading-4">
                Free information for all access, unlimited <br />
                bookings, 1 by 1 online consultation
              </p>
            </div>
            <div className="flex flex-col gap-2 py-2 text-xs">
              <div className="flex flex-row items-center gap-2 px-4 text-black">
                <Image
                  src="/icons/check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p>Booking service for selected package</p>
              </div>
              <div className="flex flex-row items-center gap-2 px-4 text-black">
                <Image
                  src="/icons/check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p>Free online zoom consultation</p>
              </div>
              <div className="flex flex-row items-start gap-2 px-4 text-black">
                <Image
                  src="/icons/minus-check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="text-gray-400">
                  Visa application service for max 2 <br />
                  persons (visa fee not included)
                </p>
              </div>

              <div className="flex flex-row items-start gap-2 px-4 text-black">
                <Image
                  src="/icons/minus-check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="text-gray-400">Flight ticket booking service</p>
              </div>

              <div className="flex flex-row items-start gap-2 px-4 text-black">
                <Image
                  src="/icons/minus-check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="text-gray-400">
                  Translation service for treatment
                </p>
              </div>
              <div className="flex flex-row items-start gap-2 px-4 text-black">
                <Image
                  src="/icons/minus-check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="text-gray-400">
                  Translation service for treatment
                </p>
              </div>
            </div>
          </div>

          <div className="absolute left-[calc(50vw-100px)] top-[5px] z-0 max-w-sm rounded-lg border-2 border-gray-200 bg-[#E2E2E2] text-left">
            <div className="rounded-t-lg bg-[#685DC5] p-4">
              <p className="text-base font-medium leading-5">Premium Package</p>
              <p className="mt-1 text-sm font-normal leading-4">1000 Baht</p>
              <p className="mb-1 mt-2 text-xs font-normal leading-4">
                Free information for all access, unlimited <br />
                bookings, 1 by 1 online consultation
              </p>
            </div>
            <div className="flex flex-col gap-2 py-2 text-xs">
              <div className="flex flex-row items-center gap-2 px-4 text-black">
                <Image
                  src="/icons/check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p>Booking service for selected package</p>
              </div>
              <div className="flex flex-row items-center gap-2 px-4 text-black">
                <Image
                  src="/icons/check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p>Free online zoom consultation</p>
              </div>

              <div className="flex flex-row items-start gap-2 px-4 text-black">
                <Image
                  src="/icons/minus-check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="text-gray-400">Flight ticket booking service</p>
              </div>

              <div className="flex flex-row items-start gap-2 px-4 text-black">
                <Image
                  src="/icons/minus-check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="text-gray-400">
                  Translation service for treatment
                </p>
              </div>
              <div className="flex flex-row items-start gap-2 px-4 text-black">
                <Image
                  src="/icons/minus-check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="text-gray-400">
                  Translation service for treatment
                </p>
              </div>
              <div className="flex flex-row items-start gap-2 px-4 text-black">
                <Image
                  src="/icons/minus-check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="text-gray-400">
                  Translation service for treatment
                </p>
              </div>
              <div className="flex flex-row items-start gap-2 px-4 text-black">
                <Image
                  src="/icons/minus-check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="text-gray-400">
                  Translation service for treatment
                </p>
              </div>
              <div className="flex flex-row items-start gap-2 px-4 text-black">
                <Image
                  src="/icons/minus-check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="text-gray-400">
                  Translation service for treatment
                </p>
              </div>
              <div className="flex flex-row items-start gap-2 px-4 text-black">
                <Image
                  src="/icons/minus-check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="text-gray-400">
                  Translation service for treatment
                </p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="mt-10">
          Choose your <br />
          desire package
        </h3>
        <h4 className="mt-5">
          We offer standard, and premium packages <br />
          depending on your needs
        </h4>
      </div>

      {/* Step 3: Choose your desire package */}
      <div
        className={`invisible absolute left-full top-[5vh] flex w-full flex-col items-center opacity-0 ease-in-out sm:left-1/3 ${currentStep == 2 ? "!visible !left-0 opacity-100" : ""} ${isAnimating && currentStep == 2 ? "transition-[transform, shadow] !visible -translate-x-full transform !opacity-0 duration-1000 sm:-translate-x-1/3" : ""} ${isAnimating && currentStep == 1 ? "transition-[transform, shadow] !visible !left-full -translate-x-full transform opacity-100 duration-1000 sm:!left-1/3 sm:-translate-x-1/3" : ""}`}
      >
        <div className="relative mx-auto flex h-[50vh] w-full flex-row items-center justify-center gap-8">
          <div className="relative z-10 mt-5 w-[250px] max-w-sm rounded-lg border-2 border-gray-200 bg-white text-left shadow-big">
            <div className="rounded-t-lg bg-[#938ae5] p-4">
              <p className="text-base font-medium leading-5">
                Standard Package
              </p>
              <p className="mt-1 text-sm font-normal leading-4">1000 Baht</p>
              <p className="mb-1 mt-2 text-xs font-normal leading-4">
                Free information for all access, unlimited <br />
                bookings, 1 by 1 online consultation
              </p>
            </div>
            <div className="flex flex-col gap-2 py-2 text-xs">
              <div className="flex flex-row items-center gap-2 px-4 text-black">
                <Image
                  src="/icons/check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p>Booking service for selected package</p>
              </div>
              <div className="flex flex-row items-center gap-2 px-4 text-black">
                <Image
                  src="/icons/check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p>Free online zoom consultation</p>
              </div>
              <div className="flex flex-row items-start gap-2 px-4 text-black">
                <Image
                  src="/icons/minus-check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="text-gray-400">
                  Visa application service for max 2 <br />
                  persons (visa fee not included)
                </p>
              </div>

              <div className="flex flex-row items-start gap-2 px-4 text-black">
                <Image
                  src="/icons/minus-check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="text-gray-400">Flight ticket booking service</p>
              </div>

              <div className="flex flex-row items-start gap-2 px-4 text-black">
                <Image
                  src="/icons/minus-check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="text-gray-400">
                  Translation service for treatment
                </p>
              </div>
              <div className="flex flex-row items-start gap-2 px-4 text-black">
                <Image
                  src="/icons/minus-check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="text-gray-400">
                  Translation service for treatment
                </p>
              </div>
            </div>
          </div>

          <div className="absolute left-[calc(50vw-100px)] top-[5px] z-0 max-w-sm rounded-lg border-2 border-gray-200 bg-[#E2E2E2] text-left">
            <div className="rounded-t-lg bg-[#685DC5] p-4">
              <p className="text-base font-medium leading-5">Premium Package</p>
              <p className="mt-1 text-sm font-normal leading-4">1000 Baht</p>
              <p className="mb-1 mt-2 text-xs font-normal leading-4">
                Free information for all access, unlimited <br />
                bookings, 1 by 1 online consultation
              </p>
            </div>
            <div className="flex flex-col gap-2 py-2 text-xs">
              <div className="flex flex-row items-center gap-2 px-4 text-black">
                <Image
                  src="/icons/check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p>Booking service for selected package</p>
              </div>
              <div className="flex flex-row items-center gap-2 px-4 text-black">
                <Image
                  src="/icons/check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p>Free online zoom consultation</p>
              </div>

              <div className="flex flex-row items-start gap-2 px-4 text-black">
                <Image
                  src="/icons/minus-check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="text-gray-400">Flight ticket booking service</p>
              </div>

              <div className="flex flex-row items-start gap-2 px-4 text-black">
                <Image
                  src="/icons/minus-check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="text-gray-400">
                  Translation service for treatment
                </p>
              </div>
              <div className="flex flex-row items-start gap-2 px-4 text-black">
                <Image
                  src="/icons/minus-check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="text-gray-400">
                  Translation service for treatment
                </p>
              </div>
              <div className="flex flex-row items-start gap-2 px-4 text-black">
                <Image
                  src="/icons/minus-check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="text-gray-400">
                  Translation service for treatment
                </p>
              </div>
              <div className="flex flex-row items-start gap-2 px-4 text-black">
                <Image
                  src="/icons/minus-check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="text-gray-400">
                  Translation service for treatment
                </p>
              </div>
              <div className="flex flex-row items-start gap-2 px-4 text-black">
                <Image
                  src="/icons/minus-check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="text-gray-400">
                  Translation service for treatment
                </p>
              </div>
              <div className="flex flex-row items-start gap-2 px-4 text-black">
                <Image
                  src="/icons/minus-check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="text-gray-400">
                  Translation service for treatment
                </p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="mt-10">
          Choose your <br />
          desire package
        </h3>
        <h4 className="mt-5">
          We offer standard, and premium packages <br />
          depending on your needs
        </h4>
      </div>

      {/* Step 4: Choose your desire package */}
      <div
        className={`invisible absolute left-full top-[5vh] flex w-full flex-col items-center opacity-0 ease-in-out sm:left-1/3 ${currentStep == 3 ? "!visible !left-0 opacity-100" : ""} ${isAnimating && currentStep == 3 ? "transition-[transform, shadow] !visible -translate-x-full transform !opacity-0 duration-1000 sm:-translate-x-1/3" : ""} ${isAnimating && currentStep == 2 ? "transition-[transform, shadow] !visible !left-full -translate-x-full transform opacity-100 duration-1000 sm:!left-1/3 sm:-translate-x-1/3" : ""}`}
      >
        <div className="relative mx-auto flex h-[50vh] w-full flex-row items-center justify-center gap-8">
          <div className="relative z-10 mt-5 w-[250px] max-w-sm rounded-lg border-2 border-gray-200 bg-white text-left shadow-big">
            <div className="rounded-t-lg bg-[#938ae5] p-4">
              <p className="text-base font-medium leading-5">
                Standard Package
              </p>
              <p className="mt-1 text-sm font-normal leading-4">1000 Baht</p>
              <p className="mb-1 mt-2 text-xs font-normal leading-4">
                Free information for all access, unlimited <br />
                bookings, 1 by 1 online consultation
              </p>
            </div>
            <div className="flex flex-col gap-2 py-2 text-xs">
              <div className="flex flex-row items-center gap-2 px-4 text-black">
                <Image
                  src="/icons/check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p>Booking service for selected package</p>
              </div>
              <div className="flex flex-row items-center gap-2 px-4 text-black">
                <Image
                  src="/icons/check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p>Free online zoom consultation</p>
              </div>
              <div className="flex flex-row items-start gap-2 px-4 text-black">
                <Image
                  src="/icons/minus-check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="text-gray-400">
                  Visa application service for max 2 <br />
                  persons (visa fee not included)
                </p>
              </div>

              <div className="flex flex-row items-start gap-2 px-4 text-black">
                <Image
                  src="/icons/minus-check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="text-gray-400">Flight ticket booking service</p>
              </div>

              <div className="flex flex-row items-start gap-2 px-4 text-black">
                <Image
                  src="/icons/minus-check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="text-gray-400">
                  Translation service for treatment
                </p>
              </div>
              <div className="flex flex-row items-start gap-2 px-4 text-black">
                <Image
                  src="/icons/minus-check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="text-gray-400">
                  Translation service for treatment
                </p>
              </div>
            </div>
          </div>

          <div className="absolute left-[calc(50vw-100px)] top-[5px] z-0 max-w-sm rounded-lg border-2 border-gray-200 bg-[#E2E2E2] text-left">
            <div className="rounded-t-lg bg-[#685DC5] p-4">
              <p className="text-base font-medium leading-5">Premium Package</p>
              <p className="mt-1 text-sm font-normal leading-4">1000 Baht</p>
              <p className="mb-1 mt-2 text-xs font-normal leading-4">
                Free information for all access, unlimited <br />
                bookings, 1 by 1 online consultation
              </p>
            </div>
            <div className="flex flex-col gap-2 py-2 text-xs">
              <div className="flex flex-row items-center gap-2 px-4 text-black">
                <Image
                  src="/icons/check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p>Booking service for selected package</p>
              </div>
              <div className="flex flex-row items-center gap-2 px-4 text-black">
                <Image
                  src="/icons/check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p>Free online zoom consultation</p>
              </div>

              <div className="flex flex-row items-start gap-2 px-4 text-black">
                <Image
                  src="/icons/minus-check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="text-gray-400">Flight ticket booking service</p>
              </div>

              <div className="flex flex-row items-start gap-2 px-4 text-black">
                <Image
                  src="/icons/minus-check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="text-gray-400">
                  Translation service for treatment
                </p>
              </div>
              <div className="flex flex-row items-start gap-2 px-4 text-black">
                <Image
                  src="/icons/minus-check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="text-gray-400">
                  Translation service for treatment
                </p>
              </div>
              <div className="flex flex-row items-start gap-2 px-4 text-black">
                <Image
                  src="/icons/minus-check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="text-gray-400">
                  Translation service for treatment
                </p>
              </div>
              <div className="flex flex-row items-start gap-2 px-4 text-black">
                <Image
                  src="/icons/minus-check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="text-gray-400">
                  Translation service for treatment
                </p>
              </div>
              <div className="flex flex-row items-start gap-2 px-4 text-black">
                <Image
                  src="/icons/minus-check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="text-gray-400">
                  Translation service for treatment
                </p>
              </div>
              <div className="flex flex-row items-start gap-2 px-4 text-black">
                <Image
                  src="/icons/minus-check.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
                <p className="text-gray-400">
                  Translation service for treatment
                </p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="mt-10">
          Choose your <br />
          desire package
        </h3>
        <h4 className="mt-5">
          We offer standard, and premium packages <br />
          depending on your needs
        </h4>
      </div>

      <div className="mt-[75vh] flex w-full flex-row items-center justify-center">
        <ul className="absolute bottom-[3.5rem] left-10 flex items-center gap-1 sm:static">
          <li
            className={`h-2 w-10 rounded-full bg-white text-base font-normal text-gray-900 ${currentStep == 0 && isAnimating ? "w-2 transform !bg-gray-300 !text-gray-600 opacity-50 transition-all duration-1000 ease-in-out" : ""} ${currentStep != 0 ? "w-2 !bg-gray-300 !text-gray-600 opacity-50" : ""} `}
          />
          <li
            className={`h-2 w-10 rounded-full bg-white text-base font-normal text-gray-900 ${currentStep == 1 && isAnimating ? "w-2 transform !bg-gray-300 !text-gray-600 opacity-50 transition-all duration-1000 ease-in-out" : ""} ${currentStep != 1 ? "w-2 !bg-gray-300 !text-gray-600 opacity-50" : ""} ${currentStep == 0 && isAnimating ? "!w-10 transform !bg-white !text-gray-900 !opacity-100 transition-all duration-1000 ease-in-out" : ""}`}
          />
          <li
            className={`h-2 w-10 rounded-full bg-white text-base font-normal text-gray-900 ${currentStep == 2 && isAnimating ? "w-2 transform !bg-gray-300 !text-gray-600 opacity-50 transition-all duration-1000 ease-in-out" : ""} ${currentStep != 2 ? "w-2 !bg-gray-300 !text-gray-600 opacity-50" : ""} ${currentStep == 1 && isAnimating ? "!w-10 transform !bg-white !text-gray-900 !opacity-100 transition-all duration-1000 ease-in-out" : ""}`}
          />
          <li
            className={`h-2 w-10 rounded-full bg-white text-base font-normal text-gray-900 ${currentStep == 3 && isAnimating ? "w-2 transform !bg-gray-300 !text-gray-600 opacity-50 transition-all duration-1000 ease-in-out" : ""} ${currentStep != 3 ? "w-2 !bg-gray-300 !text-gray-600 opacity-50" : ""} ${currentStep == 2 && isAnimating ? "!w-10 transform !bg-white !text-gray-900 !opacity-100 transition-all duration-1000 ease-in-out" : ""}`}
          />
        </ul>

        {/* <button className="bg-white rounded-full w-16 h-16 flex items-center justify-center absolute left-8 bottom-16 sm:mt-12 ">
          <Image src="/icons/left-arrow.svg" alt="left arrow" width={30} height={30} />
        </button> */}
        <button
          className="absolute bottom-8 right-8 flex h-16 w-16 items-center justify-center rounded-full bg-white sm:static sm:ml-16"
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
