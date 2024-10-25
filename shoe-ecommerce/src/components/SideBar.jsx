/* eslint-disable react/prop-types */
import SideBarItem from "./SideBarItem";

export default function SideBar({ closeNavBar }) {
  return (
    <>
      <nav className="flex justify-between content-center border-b border-slate-800 py-6 border-dashed">
        <span>
          <svg
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            fill="none"
            opacity="0.4"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.1207 12.78C12.0507 12.77 11.9607 12.77 11.8807 12.78C10.1207 12.72 8.7207 11.28 8.7207 9.50998C8.7207 7.69998 10.1807 6.22998 12.0007 6.22998C13.8107 6.22998 15.2807 7.69998 15.2807 9.50998C15.2707 11.28 13.8807 12.72 12.1207 12.78Z"
              stroke="#000"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.7398 19.3801C16.9598 21.0101 14.5998 22.0001 11.9998 22.0001C9.39977 22.0001 7.03977 21.0101 5.25977 19.3801C5.35977 18.4401 5.95977 17.5201 7.02977 16.8001C9.76977 14.9801 14.2498 14.9801 16.9698 16.8001C18.0398 17.5201 18.6398 18.4401 18.7398 19.3801Z"
              stroke="#000"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="#000"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span onClick={closeNavBar}>
          <svg
            fill="#000000"
            height="32px"
            width="32px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 496"
            opacity="0.5"
          >
            <g>
              <g>
                <path
                  d="M248,0C111.168,0,0.256,111.04,0.256,248S111.184,496,248,496c136.832,0,247.744-111.04,247.744-248S384.816,0,248,0z
			 M248,480C120.208,480,16.256,375.92,16.256,248S120.208,16,248,16s231.744,104.08,231.744,232S375.792,480,248,480z"
                />
              </g>
            </g>
            <g>
              <g>
                <polygon
                  points="336.192,171.2 324.88,159.888 248.176,236.688 171.472,159.888 160.16,171.2 236.88,248 160.16,324.8 
			171.472,336.112 248.176,259.312 324.88,336.112 336.192,324.8 259.488,248 		"
                />
              </g>
            </g>
          </svg>
        </span>
      </nav>
      <section>
        <SideBarItem name="New" />
        <SideBarItem name="Women" />
        <SideBarItem name="Men" />
        <SideBarItem name="Kids" />
        <SideBarItem name="Collections" />
        <SideBarItem name="Brands" />
        <SideBarItem name="Sale" />
        <SideBarItem name="Gifts" />
        <SideBarItem name="Help & Support" />
      </section>
    </>
  );
}
