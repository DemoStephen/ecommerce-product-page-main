/* eslint-disable react/prop-types */
export default function SideBarItem({ name }) {
  return (
    <>
      <div className="flex justify-between border-b border-slate-800 py-5 border-dotted items-center">
        <span>{name}</span>
        <span></span>
      </div>
    </>
  );
}
