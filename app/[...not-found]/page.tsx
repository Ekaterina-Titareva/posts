"use client";

import Link from "next/link";

export default function NotFoundComponent() {
  return (
    <div className="w-full pt-20 text-center my-auto ">
      <Link
        href="/"
        className="p-2 border rounded-lg hover:shadow-2xl hover:shadow-black"
      >
        Return Home
      </Link>
    </div>
  );
}
