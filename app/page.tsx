"use client";

import Image from "next/image";

export default function Home() {
  const currentColor = "red";
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <svg viewBox="0 0 600 600">
        <path
          onClick={() => console.log("clicked")}
          className="fill-current hover:text-purple-400"
          d="M468.8481750488281 310.9947509765625C446.7277577718099 340.445011138916 259.5549825032552 319.5026028951009 244.2408447265625 285.8638610839844C228.92670694986978 252.22511927286783 339.52879333496094 104.97381846110027 376.9633483886719 109.16230010986328C414.3979034423828 113.3507817586263 490.9685923258464 281.544490814209 468.8481750488281 310.9947509765625C446.7277577718099 340.445011138916 259.5549825032552 319.5026028951009 244.2408447265625 285.8638610839844 "
        ></path>
      </svg>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"></div>
      </div>
    </main>
  );
}
