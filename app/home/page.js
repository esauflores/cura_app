"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-screen flex-col overflow-hidden bg-white text-black">
      <div className="flex-grow pb-[100px]">
        <nav className="w-screen border-gray-200 dark:bg-gray-900">
          <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
            <div className="flex flex-row items-center">
              <div>
                <Image
                  src="/icons/user.svg"
                  className="h-14 w-14"
                  alt="Flowbite Logo"
                  width={32}
                  height={32}
                />
              </div>
              <div className="ml-3 flex flex-col text-left">
                <p>Let’s started!</p>
                <p className="text-lg font-bold text-[#4F469C]">Login</p>
              </div>
            </div>
            <div>
              <button className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D9D9D9]">
                <Image
                  src="/icons/notification-bell.svg"
                  alt="notification bell"
                  width={30}
                  height={30}
                />
              </button>
            </div>
          </div>
        </nav>

        <div className="relative mx-4 mt-4 flex flex-col rounded-3xl bg-[#685DC5] p-4 pb-8 text-white">
          <div>
            <p className="text-lg">
              Need help with consultation! <br /> Consult for free.
            </p>
            <p className="mt-3 text-base">Our experts are here to help you</p>
          </div>
          <button className="absolute bottom-6 right-4 flex flex-row items-center rounded-2xl bg-white px-2 py-1 text-[#4F469C]">
            <Image
              src="/icons/telephone.svg"
              alt="phone"
              width={20}
              height={20}
            />
            <p className="ml-2 text-base">Consult</p>
          </button>
        </div>

        <div className="mx-4 mt-6 flex flex-row justify-between gap-4">
          <div className="relative flex w-1/2 flex-col rounded-3xl bg-[#FFEEDD] p-4 pb-8 text-black">
            <div>
              <p className="text-lg">Hospitals</p>
              <p className="mt-3 text-base">
                Click here to find <br /> hospitals
              </p>
            </div>
            <button className="absolute bottom-3 right-4 flex flex-row items-center rounded-2xl px-2">
              <Image
                src="/icons/hospital.svg"
                alt="hospital"
                width={32}
                height={32}
              />
            </button>
          </div>
          <div className="relative flex w-1/2 flex-col rounded-3xl bg-[#F8F7FF] p-4 pb-8 text-black">
            <div>
              <p className="text-lg">Doctors</p>
              <p className="mt-3 text-base">
                Click here to find <br /> doctors
              </p>
            </div>
            <button className="absolute bottom-3 right-4 flex flex-row items-center rounded-2xl px-2">
              <Image
                src="/icons/doctor.svg"
                alt="doctor"
                width={32}
                height={32}
              />
            </button>
          </div>
        </div>

        <div className="mx-4 mt-6 flex flex-col gap-4">
          <p className="text-xl">Medical Specialties</p>
          <div className="flex flex-row flex-wrap justify-center gap-4">
            <div className="flex w-[75px] flex-col items-center justify-center">
              <button className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D9D9D9]">
                <Image
                  src="/icons/cancer.svg"
                  alt="cancer"
                  width={40}
                  height={40}
                />
              </button>
              Cancer
            </div>
            <div className="flex w-[75px] flex-col items-center justify-center">
              <button className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D9D9D9]">
                <Image
                  src="/icons/life-line.svg"
                  alt="life line"
                  width={40}
                  height={40}
                />
              </button>
              Heart
            </div>
            <div className="flex w-[75px] flex-col items-center justify-center">
              <button className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D9D9D9]">
                <Image
                  src="/icons/knee.svg"
                  alt="orthopedic"
                  width={40}
                  height={40}
                />
              </button>
              Orthopedic
            </div>
            <div className="flex w-[75px] flex-col items-center justify-center">
              <button className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D9D9D9]">
                <Image
                  src="/icons/brain.svg"
                  alt="brain"
                  width={40}
                  height={40}
                />
              </button>
              Brain
            </div>
            <div className="flex w-[75px] flex-col items-center justify-center">
              <button className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D9D9D9]">
                <Image
                  src="/icons/dental-care.svg"
                  alt="dental"
                  width={40}
                  height={40}
                />
              </button>
              Dental
            </div>
            <div className="flex w-[75px] flex-col items-center justify-center">
              <button className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D9D9D9]">
                <Image
                  src="/icons/treatment-plan.svg"
                  alt="check-up"
                  width={40}
                  height={40}
                />
              </button>
              Check-up
            </div>
            <div className="flex w-[75px] flex-col items-center justify-center">
              <button className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D9D9D9]">
                <Image
                  src="/icons/surgery.svg"
                  alt="surgery"
                  width={40}
                  height={40}
                />
              </button>
              Surgery
            </div>
            <div className="flex w-[75px] flex-col items-center justify-center">
              <button className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D9D9D9]">
                <Image
                  src="/icons/select-all.svg"
                  alt="surgery"
                  width={40}
                  height={40}
                />
              </button>
              View All
            </div>
          </div>
        </div>

        <div className="mx-4 mt-8 flex flex-col justify-between gap-4">
          <div className="flex flex-row justify-between">
            <p className="text-xl">Promotions</p>
            <a className="text-[#4F469C]">View All</a>
          </div>

          <div className="relative my-3 flex flex-col">
            <button className="absolute right-6 top-4 flex flex-row items-center rounded-2xl bg-white px-2 py-1 text-[#4F469C]">
              <Image src="/icons/knee.svg" alt="bones" width={20} height={20} />
              <p className="ml-2 text-base">Bones</p>
            </button>

            <Image
              src="/images/promotion1.jpg"
              className="h-48 w-full rounded-3xl"
              alt="promotion"
              width={300}
              height={200}
            />

            <p className="ml-2 mt-3 text-xl font-[500]">Promo 1</p>
            <p className="ml-2 mr-5 mt-3 text-base">
              Custom smaller text for promotion lorem ipsum dolor sit amet
            </p>

            <div className="flox-row mt-5 flex gap-4">
              <button className="flex flex-row items-center justify-center rounded-2xl bg-[#4F469C] px-3 py-1 text-white">
                <p className="text-base">11000 Baht</p>
              </button>

              <button className="flex flex-row items-center justify-center rounded-2xl bg-gray-200 px-3 py-1 text-black">
                <p className="text-base">Expire on 31/12/2024</p>
              </button>
            </div>
          </div>

          <div className="relative my-3 flex flex-col">
            <button className="absolute right-6 top-4 flex flex-row items-center rounded-2xl bg-white px-2 py-1 text-[#4F469C]">
              <Image src="/icons/knee.svg" alt="bones" width={20} height={20} />
              <p className="ml-2 text-base">Bones</p>
            </button>

            <Image
              src="/images/promotion1.jpg"
              className="h-48 w-full rounded-3xl"
              alt="promotion"
              width={300}
              height={200}
            />

            <p className="ml-2 mt-3 text-xl font-[500]">Promo 2</p>
            <p className="ml-2 mr-5 mt-3 text-base">
              Custom smaller text for promotion lorem ipsum dolor sit amet
            </p>

            <div className="flox-row mt-5 flex gap-4">
              <button className="flex flex-row items-center justify-center rounded-2xl bg-[#4F469C] px-3 py-1 text-white">
                <p className="text-base">11000 Baht</p>
              </button>

              <button className="flex flex-row items-center justify-center rounded-2xl bg-gray-200 px-3 py-1 text-black">
                <p className="text-base">Expire on 31/12/2024</p>
              </button>
            </div>
          </div>

          <div className="relative my-3 flex flex-col">
            <button className="absolute right-6 top-4 flex flex-row items-center rounded-2xl bg-white px-2 py-1 text-[#4F469C]">
              <Image src="/icons/knee.svg" alt="bones" width={20} height={20} />
              <p className="ml-2 text-base">Bones</p>
            </button>

            <Image
              src="/images/promotion1.jpg"
              className="h-48 w-full rounded-3xl"
              alt="promotion"
              width={300}
              height={200}
            />

            <p className="ml-2 mt-3 text-xl font-[500]">Promo 3</p>
            <p className="ml-2 mr-5 mt-3 text-base">
              Custom smaller text for promotion lorem ipsum dolor sit amet
            </p>

            <div className="flox-row mt-5 flex gap-4">
              <button className="flex flex-row items-center justify-center rounded-2xl bg-[#4F469C] px-3 py-1 text-white">
                <p className="text-base">11000 Baht</p>
              </button>

              <button className="flex flex-row items-center justify-center rounded-2xl bg-gray-200 px-3 py-1 text-black">
                <p className="text-base">Expire on 31/12/2024</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <nav className="fixed bottom-0 w-full bg-white text-black">
        <hr class="h-px border-0 bg-gray-200 dark:bg-gray-700" />
        <div className="flex justify-around p-4">
          <a href="#home" className="hover:text-gray-400">
            <div className="flex flex-col items-center justify-center">
              <Image src="/icons/home.svg" alt="home" width={32} height={32} />
              Home
            </div>
          </a>
          <a href="#home" className="hover:text-gray-400">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/icons/star-gray.svg"
                alt="explore"
                width={32}
                height={32}
              />
              Explore
            </div>
          </a>
          <a href="#home" className="hover:text-gray-400">
            <div className="flex flex-col items-center justify-center">
              <Image src="/icons/chat.svg" alt="chat" width={32} height={32} />
              Chat
            </div>
          </a>
          <a href="#home" className="hover:text-gray-400">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/icons/setting.svg"
                alt="settings"
                width={32}
                height={32}
              />
              Settings
            </div>
          </a>
        </div>
      </nav>
    </div>
  );
}
