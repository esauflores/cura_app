import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center bg-purple-gradient min-h-screen pt-[10vh] sm:pt-[15vh] flex flex-col items-center text-white text-[calc(10px+2vmin)] relative sm:static" >
      <Image src="/icons/logo_white.ico" alt="logo" width={100} height={100} className="pointer-events-none h-[15vh] sm:h-[20vh] w-auto" priority />

      <h1>Cura</h1>

      <h3 className='mt-12'>
        Connecting you <br />
        to Premium Healthcare
      </h3>

      <div className="flex gap-8 items-center">

        <ul class="flex gap-1 items-center absolute left-10 bottom-[5.5rem] sm:static sm:mt-12">
          <li
            class="text-base font-normal text-gray-900 w-10 h-2 rounded-full bg-white">
          </li>
          <li
            class="text-base font-normal text-gray-900 w-2 h-2 rounded-full bg-gray-300 opacity-50">
          </li>
          <li
            class="text-base font-normal text-gray-600 w-2 h-2 rounded-full bg-gray-300 opacity-50">
          </li>
          <li
            class="text-base font-normal text-gray-600 w-2 h-2 rounded-full bg-gray-300 opacity-50">
          </li>
        </ul>

        {/* <button className="bg-white rounded-full w-16 h-16 flex items-center justify-center absolute sm:static left-8 bottom-16 sm:mt-12 ">
          <Image src="/icons/left-arrow.svg" alt="left arrow" width={30} height={30} />
        </button> */}
        <button className="bg-white rounded-full w-16 h-16 flex items-center justify-center absolute right-8 bottom-16 sm:static sm:mt-12 sm:ml-16">
          <Image src="/icons/right-arrow.svg" alt="right arrow" width={30} height={30} />
        </button>
      </div >
    </div >
  );
}
