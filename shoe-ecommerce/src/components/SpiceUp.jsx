export default function SpiceUp() {
  return (
    <section className="px-[2.5%] py-4 font-semibold">
      <h2 className="text-2xl my-4">Spice Up Your Life In Converse</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="w-[100%]">
          <img
            src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="product image"
            className="w-[100%] px-2"
          />
          <p className="my-2 text-[1.15rem] text-center">
            <span className="my-4 block">
              Tried-and-trues that are anything but ordinary.
            </span>
            <span>Shop Low-Tops</span>
          </p>
        </div>

        <div className="w-[100%]">
          <img
            src="https://images.pexels.com/photos/3613388/pexels-photo-3613388.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="product image"
            className="w-[100%] px-2"
          />
          <p className="my-2 text-[1.15rem] text-center">
            <span className="my-4 block">Just-the pick me up</span>
            <span>Shop Low-Tops</span>
          </p>
        </div>

        <div className="w-[100%]">
          <img
            src="https://images.pexels.com/photos/27100529/pexels-photo-27100529/free-photo-of-close-up-of-shoes.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="product image"
            className="w-[100%] px-2"
          />
          <p className="my-2 text-[1.15rem] text-center">
            <span className="my-4 block">
              Tried-and-trues that are anything but ordinary.
            </span>
            <span className="before:content-['*']">Shop Low-Tops</span>
          </p>
        </div>
      </div>
    </section>
  );
}
