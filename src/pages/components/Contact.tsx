import React from "react";
import Link from "next/link";

export default function Contact() {
  return (
    <section
      className="w-[1278px] max-w-full my-0 mx-auto grid grid-cols-3 gap-4 p-6"
      id="contact"
    >
      <div className="col-span-3 lg:col-span-2 flex flex-row items-center gap-5 ">
        <h1 className="font-semibold text-3xl">Hit me up!</h1>
        <div className="p-1 rounded-md bg-gradient-to-r hover:from-red-400 hover:to-blue-500">
          <button className="py-2 px-5 px-5bg-yellow-400 rounded-md bg-yellow-400 text-black underline">
            <Link href="mailto:soemantri@gmail.com?subject=Saying Holla From The Other Side">
              Email
            </Link>
          </button>
        </div>
      </div>
      <aside className="col-span-1 hidden lg:block"></aside>
    </section>
  );
}
