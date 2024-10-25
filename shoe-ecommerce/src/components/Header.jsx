export default function Header() {
  return (
    <header>
      <div className="h-[24rem] bg-header-hero bg-cover bg-no-repeat bg-center"></div>
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
