/* eslint-disable react/prop-types */
export default function Product({ img }) {
  return (
    <article className="px-8 md:px-0 md:pb-0 pb-4 transition-transform ease-out duration-500 overflow-hidden group md:shadow-none shadow-lg">
      <div className="relative">
        <div className="absolute left-2 top-0 flex flex-col gap-2 translate-y-[-12rem] group-hover:translate-y-[0rem] transition-transform">
          <span className="w-10 h-10 bg-slate-400 rounded-full cursor-pointer"></span>
          <span className="w-10 h-10 bg-slate-400 rounded-full cursor-pointer"></span>
          <span className="w-10 h-10 bg-slate-400 rounded-full cursor-pointer"></span>
          <span className="w-10 h-10 bg-slate-400 rounded-full cursor-pointer"></span>
        </div>
        <img
          src={img}
          alt="product image"
          className="w-full mb-[-3rem] md:mb-0"
        />
      </div>
      <div className="mt-8">
        <span className="flex gap-1.5">
          <span className="w-5 h-5 rounded-full bg-slate-500"></span>
          <span className="w-5 h-5 rounded-full bg-slate-500"></span>
          <span className="w-5 h-5 rounded-full bg-slate-500"></span>
          <span className="w-5 h-5 rounded-full bg-slate-500"></span>
        </span>
        <p>Vertex</p>
        <h5 className="font-bold text-2xl">₦145,000.00</h5>
      </div>
    </article>
  );
}
