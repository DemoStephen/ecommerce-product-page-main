/* eslint-disable react/prop-types */
export default function Trend({ name, img }) {
  return (
    <div className="w-[100%]">
      <img src={img} alt="product image" className="w-[100%]" />
      <p className="my-2">{name}</p>
    </div>
  );
}
