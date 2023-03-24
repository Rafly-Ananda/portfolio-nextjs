import React from "react";

export default function page() {
  return (
    <main
      className="w-full min-h-screen text-black dark:text-white
  "
    >
      <section className="w-[1278px] max-w-full my-0 mx-auto grid grid-cols-3 gap-4 p-6">
        <div className="col-span-3 lg:col-span-2 flex flex-col gap-5">
          <h1 className="font-semibold text-4xl">Blog</h1>
          <h5>No posts yet 😔. It's coming in the near future 🚀</h5>
        </div>
        <aside className="col-span-1 hidden lg:block"></aside>
      </section>
    </main>
  );
}
