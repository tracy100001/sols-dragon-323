import About from "@/components/About";
import React from "react";

function Page() {
  return (
    <>
      <div className="bg_darker py-4"></div>
      <About page={true} />
    </>
  );
}

export default Page;
