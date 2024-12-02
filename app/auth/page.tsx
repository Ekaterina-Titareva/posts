"use client";

import { useState } from "react";

const Auth = () => {
  const [type, setType] = useState<"login" | "register">("login");

  return (
    <section className="flex w-full h-full  flex-col justify-center items-center ">
      <button
        className="px-6 py-2 border rounded-md mt-2 hover:shadow-lg hover:shadow-orange-400"
        type="button"
        {...{
          onClick: () => {
            setType(type === "login" ? "register" : "login");
          },
        }}
      >
        {type === "login" ? "register" : "login"}
      </button>
    </section>
  );
};

export default Auth;
