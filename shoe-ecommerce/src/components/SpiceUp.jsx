export default function SpiceUp() {
  return (
    <section className="px-[2.5%] py-4 font-semibold">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start my-4">
        <div>
          {/* <h3 className="text-3xl">Collections</h3> */}
          <h2 className="text-2xl my-4">Spice Up Your Life In Converse</h2>
          <p>
            Dive into a curated collection of footwear that caters to every
            taste and occasion. Discover the latest trends in our Fashion
            Forward, work & safety categories ...
          </p>
          <div className="flex items-center gap-4 my-6">
            <button className="rotate-180 p-4 rounded-full bg-slate-50 hover:bg-white">
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
            <button className="p-4 rounded-full bg-slate-50 hover:bg-white">
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
        </div>

        <div className="w-[100%]">
          <img
            src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="product image"
            className="w-[100%] px-2"
          />
          <p className="my-2 text-[1.15rem] text-center">
            <span className="my-4 block">Sneakers and Sports</span>
          </p>
        </div>

        <div className="w-[100%]">
          <img
            src="https://images.pexels.com/photos/3613388/pexels-photo-3613388.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="product image"
            className="w-[100%] px-2"
          />
          <p className="my-2 text-[1.15rem] text-center">
            <span className="my-4 block">Clothing</span>
          </p>
        </div>

        <div className="w-[100%]">
          <img
            src="https://images.pexels.com/photos/27100529/pexels-photo-27100529/free-photo-of-close-up-of-shoes.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="product image"
            className="w-[100%] px-2"
          />
          <p className="my-2 text-[1.15rem] text-center">
            <span className="my-4 block">New Arival</span>
          </p>
        </div>
      </div>
    </section>
  );
}
