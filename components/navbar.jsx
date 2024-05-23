import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    //setting up the navbar portion
    //<div className=" w-screen bg-[#0D081E] inset-x-0 top-0 h-16 px-96">
    //  <nav>User Name</nav>
    //</div>
    <div className=" w-screen">
      <nav class="z-10 sticky ">
        <header class="pt-5 h-16 bg-[#0D081E] text-right ">
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="text-white pr-10 text-sm inline-flex"
            type="button"
          >
            User Name
            <svg
              class="w-2.5 h-2.5 ms-2 overflow-hidden"
              aria-hidden="false"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewbox="0.001 0.001 17 0.000001"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 4 4 4 4-4"
              />
            </svg>
          </button>
        </header>
      </nav>
    </div>
  );
}
