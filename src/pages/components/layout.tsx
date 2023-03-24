import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-white dark:bg-[#151718] flex flex-col items-center justify-between">
      {children}
    </main>
  );
}
