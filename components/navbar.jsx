import React from "react";

export default function Navbar() {
  return (
    //setting up the navbar portion
    //<div className=" w-screen bg-[#0D081E] inset-x-0 top-0 h-16 px-96">
    //  <nav>User Name</nav>
    //</div>
    <div className="flex flex-col w-screen ">
      <nav class="z-10 sticky top-0">
        <header class="h-16 bg-[#0D081E] text-white text-right"></header>
      </nav>
    </div>
  );
}
