import Product from "./Product";
import add1 from "../assets/adds1.png";
import add2 from "../assets/adds2.png";
import add3 from "../assets/adds3.png";

export default function FeaturedProduct() {
  return (
    <main className="px-[5%] py-4">
      <h2 className="text-3xl">Featured Product</h2>
      <div className="flex items-center justify-end gap-4 mb-6">
        <button className="rotate-180 p-4 rounded-full shadow bg-slate-50 hover:bg-white">
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
        <button className="p-4 rounded-full shadow bg-slate-50 hover:bg-white">
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
      <section className="relative">
        <div className="grid md:grid-cols-6 gap-3 overflow-hidden">
          <Product img={add1} />
          <Product img={add2} />
          <Product img={add3} />
          <Product img={add1} />
          <Product img={add2} />
          <Product img={add3} />
        </div>
      </section>
    </main>
  );
}
