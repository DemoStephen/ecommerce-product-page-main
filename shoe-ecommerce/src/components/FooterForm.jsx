/* eslint-disable no-useless-escape */
import { useRef, useState } from "react";
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export default function FooterForm() {
  const email = useRef();
  const [err, setErr] = useState(true);
  const classList =
    "w-full py-3 px-8 rounded-full bg-red-200 text-center text-red-600";
  function handleSubmit() {
    if (email.current.value.match(mailformat)) {
      setErr(true);
    } else {
      setErr(false);
    }
  }
  return (
    <section>
      <h2 className="text-center text-3xl font-bold">Get Instant Update</h2>
      <p className="text-center my-4">
        Stay informed about great and exiting offers, new arrivals and trends.
      </p>
      <form action="#">
        <div className=" md:w-3/6 w-4/5 m-auto flex flex-col gap-3">
          <input
            type="text"
            placeholder="Enter Your Email Address"
            ref={email}
            onChange={handleSubmit}
            className="w-full py-3 px-8 rounded-full outline-none"
          />
          {!err && <div className={classList}>Email Is Require</div>}
        </div>
      </form>
    </section>
  );
}
