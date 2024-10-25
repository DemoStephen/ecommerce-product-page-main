export default function Form() {
  return (
    <form action="#" className="">
      <div className="border border-cyan-950 hidden md:flex  rounded-full">
        <div className="flex items-center gap-3">
          <span className="pl-4">
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
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Search for shoes, clothes, etc."
            className="p-4 w-[20rem] bg-transparent outline-none"
          />
        </div>
        <button
          type="submit"
          className="p-4 px-8 border-l border-slate-950 font-semibold"
        >
          Search
        </button>
      </div>
    </form>
  );
}
