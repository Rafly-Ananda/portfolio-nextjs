import React from "react";
import Project from "../components/project";

export default function page() {
  return (
    <section className="w-[1278px] max-w-full my-0 mx-auto grid grid-cols-3 gap-4 p-6">
      <div className="col-span-3 lg:col-span-2">
        <Project />
      </div>
      <aside className="col-span-1 hidden lg:block"></aside>
    </section>
  );
}
