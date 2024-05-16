import React from "react";
import NavLinks from "@/components/nav-links";

export default function Sidebar() {
  return (
    // setting up the sidenav portion
    <div className="p-4 w-1/2 h-screen bg-[#161138] z-20 fixed -left-96 lg:w-52 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
      {/* setting up the container that contains options on sidenav */}
      <div className="my-4 pb-4">
        {/* setting up the options */}
        <div>
          <NavLinks />
        </div>
      </div>
    </div>
  );
}
