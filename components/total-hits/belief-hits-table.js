import React from "react";

const BELIEF_TABLE = [
  {
    subcategory: "Self Esteem",
    subvalue: "600",
    game: {
      name: "Mythbuster",
      value: "600",
      name: "Run and Catch",
      value: "600",
      name: "Guess the Word",
      value: "600",
    },
  },
  {
    subcategory: "Gender Inclusion",
    subvalue: "600",
    game: {
      name: "Mythbuster",
      value: "600",
      name: "Guess the Word",
      value: "600",
      name: "Seek and Smash",
      value: "600",
    },
  },
  {
    subcategory: "Self Regulation",
    subvalue: "600",
    game: {
      name: "Mythbuster",
      value: "600",
      name: "Run and Catch",
      value: "600",
      name: "Guess the Word",
      value: "600",
    },
  },
  {
    subcategory: "Education",
    subvalue: "600",
    game: {
      name: "Mythbuster",
      value: "600",
      name: "Guess the Word",
      value: "600",
      name: "Seek and Smash",
      value: "600",
    },
  },
];

export default function BeliefTable() {
  return (
    <table className="min-w-full text-white rounded-[20px] overflow-hidden">
      <thead className="font-normal bg-gradient-to-t from-[#3A0194] to-[#390693]">
        <tr>
          <th scope="col" className="text-start px-4 py-4 text-lg ">
            My Belief
          </th>
        </tr>
      </thead>
      <tbody className="grid grid-rows-8 grid-flow-col gap-x-8 bg-[#1B0F4E]">
        <tr className="bg-[#261971]">
          <td className=" px-4 whitepsace-nowrap py-2">Self Esteem</td>
          <td className=" px-4 whitepsace-nowrap py-2 text-right">600</td>
        </tr>
        <tr className="bg-[#1B1744]">
          <td className=" px-4 whitepsace-nowrap py-2">Mythbuster</td>
          <td className=" px-4 whitepsace-nowrap py-2 text-right">600</td>
        </tr>
        <tr className="bg-[#221E52]">
          <td className=" px-4 whitepsace-nowrap py-2">Run and Catch</td>
          <td className=" px-4 whitepsace-nowrap py-2 text-right">600</td>
        </tr>
        <tr className="bg-[#1B1744]">
          <td className=" px-4 whitepsace-nowrap py-2">Guess the Word</td>
          <td className=" px-4 whitepsace-nowrap py-2 text-right">600</td>
        </tr>

        <tr className="bg-[#261971]">
          <td className=" px-4 py-2 whitepsace-nowrap">Self Regulation</td>
          <td className=" px-4 py-2 whitepsace-nowrap text-right">600</td>
        </tr>
        <tr className="bg-[#1B1744]">
          <td className=" px-4 py-2 whitepsace-nowrap">Mythbuster</td>
          <td className=" px-4 py-2 whitepsace-nowrap text-right">600</td>
        </tr>
        <tr className="bg-[#221E52]">
          <td className=" px-4 py-2 whitepsace-nowrap">Run and Catch</td>
          <td className=" px-4 py-2 whitepsace-nowrap text-right">600</td>
        </tr>
        <tr className="bg-[#1B1744]">
          <td className=" px-4 py-2 whitepsace-nowrap">Guess the Word</td>
          <td className=" px-4 py-2 whitepsace-nowrap text-right">600</td>
        </tr>

        <tr className="bg-[#261971]">
          <td className=" px-4 py-2 whitepsace-nowrap">Gender Inclusion</td>
          <td className=" px-4 py-2 whitepsace-nowrap text-right">600</td>
        </tr>
        <tr className="bg-[#1B1744]">
          <td className=" px-4 py-2 whitepsace-nowrap">Mythbuster</td>
          <td className=" px-4 py-2 whitepsace-nowrap text-right">600</td>
        </tr>
        <tr className="bg-[#221E52]">
          <td className=" px-4 py-2 whitepsace-nowrap">Guess the Word</td>
          <td className=" px-4 py-2 whitepsace-nowrap text-right">600</td>
        </tr>
        <tr className="bg-[#1B1744]">
          <td className=" px-4 py-2 whitepsace-nowrap">Seek and Smash</td>
          <td className=" px-4 py-2 whitepsace-nowrap text-right">600</td>
        </tr>
        <tr className="bg-[#261971]">
          <td className=" px-4 py-2 whitepsace-nowrap">Education</td>
          <td className=" px-4 py-2 whitepsace-nowrap text-right">600</td>
        </tr>
        <tr className="bg-[#1B1744]">
          <td className=" px-4 py-2 whitepsace-nowrap">Mythbuster</td>
          <td className=" px-4 py-2 whitepsace-nowrap text-right">600</td>
        </tr>
        <tr className="bg-[#221E52]">
          <td className=" px-4 py-2 whitepsace-nowrap">Guess the Word</td>
          <td className=" px-4 py-2 whitepsace-nowrap text-right">600</td>
        </tr>
        <tr className="bg-[#1B1744]">
          <td className=" px-4 py-2 whitepsace-nowrap">Seek and Smash</td>
          <td className=" px-4 py-2 whitepsace-nowrap text-right">600</td>
        </tr>
      </tbody>
    </table>
  );
}
