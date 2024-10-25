import { useState } from "react";
import banner1 from "../assets/banner.jpg";
import banner2 from "../assets/banner1.jpg";

export default function Header() {
  const [current, setCurrent] = useState(0);
  let contentClass = "";
  if (current === 0) {
    contentClass = " bg-slate-100";
  } else {
    contentClass = " bg-rose-400";
  }
  function handlePrev() {
    setCurrent((prev) => (prev === 0 ? prev + 1 : prev - 1));
  }

  return (
    <header>
      <div className="overflow-hidden relative">
        <div className="flex w-full">
          <img
            src={banner1}
            alt=""
            className="w-full transition-transform ease-out duration-500"
            style={{ transform: `translateX(calc(${current} * 100%))` }}
          />
          <img
            src={banner2}
            alt=""
            className="w-full  transition-transform ease-out duration-500"
            style={{ transform: `translateX(calc(${current} * -100%))` }}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-between px-[5%]">
          <button
            onClick={handlePrev}
            className="rotate-180 p-4 rounded-full shadow bg-slate-50 hover:bg-white"
          >
            <svg
              fill="#000000"
              width="16px"
              height="16px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z"></path>
            </svg>
          </button>
          <button
            onClick={handlePrev}
            className="p-4 rounded-full shadow bg-slate-50 hover:bg-white"
          >
            <svg
              fill="#000000"
              width="16px"
              height="16px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z"></path>
            </svg>
          </button>
        </div>
        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-3">
            <span className={`w-3 h-3 rounded-full ${contentClass} `}></span>
            <span className={`w-3 h-3 rounded-full ${contentClass} `}></span>
          </div>
        </div>
      </div>
      <div className="text-center p-4">
        <h1 className="text-2xl font-semibold my-2">
          Time to party! Converse styles are back in stock.
        </h1>
        <p className="flex justify-center gap-4">
          <span className="p-2 border-b border-black hover:border-blue-600 hover:text-blue-600 hover:cursor-pointer">
            Shop Converse
          </span>
          <span className="p-2 border-b border-black hover:border-blue-600 hover:text-blue-600 hover:cursor-pointer">
            Shop the blue
          </span>
        </p>
      </div>
    </header>
  );
}
