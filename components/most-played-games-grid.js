import React from "react";

export default function GamesGrid() {
  return (
    <div className="rounded-b-lg overflow-hidden">
      <div className="text-nowrap max-w-[100%] bg-[#1D194A] px-20 py-3">
        Guess the Word
      </div>
      <div className="text-nowrap max-w-[100%] bg-[#1B1743] px-20 py-3">
        Run and Catch
      </div>
      <div className="text-nowrap max-w-[100%] bg-[#1D194A] px-20 py-3">
        Mythbuster
      </div>
      <div className="text-nowrap max-w-[100%] bg-[#1B1743] px-20 py-3 rounded-br-lg">
        Seek and Smash
      </div>
    </div>
  );
}
