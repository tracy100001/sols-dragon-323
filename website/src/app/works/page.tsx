import Works from "@/components/Works";
import React from "react";

function Page() {
  return (
    <>
      <div className="bg_darker py-4"></div>
      <Works page={true} />
    </>
  );
}

export default Page;
