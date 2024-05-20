import React from "react";

const BELIEF_TABLE = [
  {
    srno: "1",
    gender: "Female",
    age: "16-18",
    region: "North-Central",
    category: "My Belief",
    subcategory: "Responsibilities",
    game: "Learn with Letters",
    language: "En",
    date: "18-6-2022",
  },
  {
    srno: "2",
    gender: "Female",
    age: "16-18",
    region: "North-Central",
    category: "My Belief",
    subcategory: "Responsibilities",
    game: "Learn with Letters",
    language: "En",
    date: "18-6-2022",
  },
  {
    srno: "3",
    gender: "Female",
    age: "16-18",
    region: "Pacific Coast",
    category: "My Belief",
    subcategory: "Self Esteem",
    game: "Learn with Letters",
    language: "Sp",
    date: "18-6-2022",
  },
  {
    srno: "4",
    gender: "Female",
    age: "16-18",
    region: "Pacific Coast",
    category: "My Belief",
    subcategory: "Self Esteem",
    game: "Learn with Letters",
    language: "Sp",
    date: "18-6-2022",
  },
  {
    srno: "5",
    gender: "Female",
    age: "16-18",
    region: "Caribbean Coast",
    category: "My Family",
    subcategory: "Internal Relations",
    game: "Guess the word",
    language: "En",
    date: "18-6-2022",
  },
  {
    srno: "6",
    gender: "Female",
    age: "16-18",
    region: "Caribbean Coast",
    category: "My Family",
    subcategory: "Internal Relations",
    game: "Guess the word",
    language: "En",
    date: "18-6-2022",
  },
  {
    srno: "7",
    gender: "Male",
    age: "16-18",
    region: "Caribbean Coast",
    category: "My Community",
    subcategory: "Internal Relations",
    game: "Guess the word",
    language: "En",
    date: "18-6-2022",
  },
  {
    srno: "8",
    gender: "Male",
    age: "16-18",
    region: "Caribbean Coast",
    category: "My Community",
    subcategory: "Internal Relations",
    game: "Guess the word",
    language: "En",
    date: "18-6-2022",
  },
  {
    srno: "9",
    gender: "Male",
    age: "16-18",
    region: "Pacific Coast",
    category: "My Family",
    subcategory: "Self Esteem",
    game: "Guess the word",
    language: "En",
    date: "18-6-2022",
  },
  {
    srno: "10",
    gender: "Male",
    age: "16-18",
    region: "Pacific Coast",
    category: "My Family",
    subcategory: "Self Esteem",
    game: "Guess the word",
    language: "En",
    date: "18-6-2022",
  },
];

const BeliefTable = () => {
  return (
    <div className="rounded-full">
      <table className=" min-w-full text-white rounded-lg overflow-hidden">
        <thead className=" text-center text-sm font-normal bg-gradient-to-t from-[#3A0194] to-[#390693]">
          <tr>
            <th scope="col" className="px-4 py-4 text-lg ">
              My Belief
            </th>
            <th scope="col" className="px-3 py-4 font-medium"></th>
            <th scope="col" className="px-3 py-4 font-medium"></th>
            <th scope="col" className="px-3 py-4 font-medium"></th>
            <th scope="col" className="px-3 py-4 font-medium"></th>
            <th scope="col" className="px-3 py-4 font-medium"></th>
            <th scope="col" className="px-3 py-4 font-medium"></th>
            <th scope="col" className="px-3 py-4 font-medium"></th>
            <th scope="col" className="px-3 py-4 text-lg">
              2000
            </th>
          </tr>
        </thead>
        <tbody>
          {BELIEF_TABLE.map((entry) => (
            <tr key={entry.srno} className="odd:bg-[#1B1744] even:bg-[#221E52]">
              <td className="text-center text-white whitespace-nowrap px-3 py-3">
                {entry.srno}
              </td>
              <td className="text-center text-white whitespace-nowrap px-3 py-3">
                {entry.gender}
              </td>
              <td className="text-center text-white whitespace-nowrap px-3 py-3">
                {entry.age}
              </td>
              <td className="text-center text-white whitespace-nowrap px-3 py-3">
                {entry.region}
              </td>
              <td className="text-center text-white whitespace-nowrap px-3 py-3">
                {entry.category}
              </td>
              <td className="text-center text-white whitespace-nowrap px-3 py-3">
                {entry.subcategory}
              </td>
              <td className="text-center text-white whitespace-nowrap px-3 py-3">
                {entry.game}
              </td>
              <td className="text-center text-white whitespace-nowrap px-3 py-3">
                {entry.language}
              </td>
              <td className="text-center text-white whitespace-nowrap px-3 py-3">
                {entry.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HitsTable;
