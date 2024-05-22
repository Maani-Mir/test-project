import React from "react";

export default function GamesGrid() {
  return (
    <div className="rounded-b-3xl overflow-hidden">
      <div className="flex flex-row bg-[#1D194A] pt-3 pl-3">
        <div className="w-8 h-8 items-center justify-center inline-flex bg-gradient-to-t from-[#8300EA] to-[#3F01F1] rounded-full">
          1
        </div>
        <div className=" px-[45px] pb-3 pt-1 align-top">Guess the Word</div>
      </div>
      <div className="flex flex-row bg-[#1D194A] pt-3 pl-3">
        <div className="w-8 h-8 items-center justify-center inline-flex bg-gradient-to-t from-[#8300EA] to-[#3F01F1] rounded-full">
          2
        </div>
        <div className=" px-[45px] pb-3 pt-1 align-top">Run and Catch</div>
      </div>
      <div className="flex flex-row bg-[#1D194A] pt-3 pl-3">
        <div className="w-8 h-8 items-center justify-center inline-flex bg-gradient-to-t from-[#8300EA] to-[#3F01F1] rounded-full">
          3
        </div>
        <div className=" px-[45px] pb-3 pt-1 align-top">Mythbuster</div>
      </div>
      <div className="flex flex-row bg-[#1D194A] pt-3 pl-3">
        <div className="w-8 h-8 items-center justify-center inline-flex bg-gradient-to-t from-[#8300EA] to-[#3F01F1] rounded-full">
          4
        </div>
        <div className=" px-[45px] pb-3 pt-1 align-top">Seek and Smash</div>
      </div>
    </div>
  );
}
