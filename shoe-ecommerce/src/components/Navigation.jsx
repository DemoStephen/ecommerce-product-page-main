import Form from "./Form";
import SideBar from "./SideBar";

export default function Navigation() {
  return (
    <div className="relative">
      {/* TODO:
      1. Add animation to the adds
      2. Make it very realistics
      */}
      <p className="bg-slate-300 text-center flex p-2.5 justify-center text-sm">
        <span className="">
          10% off $100! +{" "}
          <span className="font-semibold border-b border-black p-1">
            Download & Open App to Get Code
          </span>
        </span>
        <span className="hidden">
          Celebrate! Iconic Converse shoes are back in stock.{" "}
          <span className="font-semibold border-b border-black p-1">
            Shop Converse
          </span>
        </span>
      </p>
      <nav className="flex justify-between px-[5%] py-6 flex-col">
        <div className="flex justify-between">
          <div className="flex items-center gap-8">
            <p className="text-3xl uppercase">logo</p>
            <Form />
          </div>
          <div className="flex items-center gap-5">
            <div className="border-r border-slate-900 relative group md:block hidden">
              <h3 className="cursor-pointer p-4 flex items-center gap-2">
                <span>My Account</span>
                <span>
                  <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                      fill="#000"
                    />
                  </svg>
                </span>
              </h3>
              <ul className="bg-slate-50 border border-transparent absolute right-4 top-full w-[15rem] h-0 overflow-hidden group-hover:h-fit group-hover:overflow-visible">
                <li className="py-1.5 px-4 cursor-pointer hover:text-slate-800">
                  Register
                </li>
                <li className="py-1.5 px-4 cursor-pointer hover:text-slate-800">
                  Login
                </li>
                <li className="py-1.5 px-4 cursor-pointer hover:text-slate-800">
                  Wish List (0)
                </li>
                <li className="py-1.5 px-4 cursor-pointer hover:text-slate-800">
                  Shopping Cart
                </li>
                <li className="py-1.5 px-4 cursor-pointer hover:text-slate-800">
                  Checkout
                </li>
              </ul>
            </div>

            <span className="cursor-pointer">
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_15_152)">
                  <rect width="24" height="24" fill="none" />
                  <circle
                    cx="10.5"
                    cy="10.5"
                    r="6.5"
                    stroke="#000000"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z"
                    fill="#000000"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_15_152">
                    <rect width="24" height="24" fill="none" />
                  </clipPath>
                </defs>
              </svg>
            </span>

            <span className="cursor-pointer">
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 6V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V6"
                  stroke="#000000"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <path
                  d="M9.1709 15C9.58273 16.1652 10.694 17 12.0002 17C13.3064 17 14.4177 16.1652 14.8295 15"
                  stroke="#000000"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <path
                  d="M20.2235 12.5257C19.6382 9.40452 19.3456 7.84393 18.2347 6.92196C17.1238 6 15.5361 6 12.3605 6H11.6393C8.46374 6 6.87596 6 5.76506 6.92196C4.65416 7.84393 4.36155 9.40452 3.77633 12.5257C2.9534 16.9146 2.54194 19.1091 3.74157 20.5545C4.94119 22 7.17389 22 11.6393 22H12.3605C16.8259 22 19.0586 22 20.2582 20.5545C20.9542 19.7159 21.1079 18.6252 20.9536 17"
                  stroke="#000000"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="cursor-pointer md:hidden">
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="#000000"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="py-4 border-b border-slate-800 justify-between hidden md:flex">
          <ul className="flex gap-4 text-[1rem]">
            <li className="cursor-pointer hover:text-slate-800">New</li>
            <li className="cursor-pointer hover:text-slate-800">Women</li>
            <li className="cursor-pointer hover:text-slate-800">Men</li>
            <li className="cursor-pointer hover:text-slate-800">Kids</li>
            <li className="cursor-pointer hover:text-slate-800">Collections</li>
            <li className="cursor-pointer hover:text-slate-800">Brands</li>
            <li className="cursor-pointer hover:text-slate-800">Sales</li>
          </ul>
          <p className="text-[1rem] cursor-pointer hover:text-slate-800">
            Help and Support
          </p>
        </div>
      </nav>
      <section className="fixed top-0 right-0 px-[5%] bg-slate-300 w-[97.5%] h-screen block md:hidden">
        <SideBar />
      </section>
    </div>
  );
}
